import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_DRMPI_BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // By default, if we have a token in the store, let's use that for authenticated requests
    const token = getState().auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    api.dispatch(logOut());
  }
  return result;
};

export const api = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Notice", "Carousel"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentails) => ({
        url: `Account/Login`,
        method: "POST",
        body: credentails,
      }),
    }),
    getNotice: builder.query({
      query: () => `Notice/GetNoticeList`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Notice", id })),
              { type: "Notice", id: "LIST" },
            ]
          : [{ type: "Notice", id: "LIST" }],
    }),
    getNoticeById: builder.query({
      query: (id) => `Notice/GetNoticeById/${id}`,
      providesTags: (result, error, id) => [{ type: "Notice", id }],
    }),
    addNotice: builder.mutation({
      query: (noticeData) => ({
        url: "Notice/CreateNotice",
        method: "POST",
        body: noticeData,
      }),
      invalidatesTags: [{ type: "Notice", id: "LIST" }],
    }),
    updateNotice: builder.mutation({
      query: ({ rowId, formData }) => ({
        url: `Notice/UpdateNotice/${rowId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: (result, error, { rowId }) => [
        { type: "Notice", rowId },
      ],
    }),
    deleteNotice: builder.mutation({
      query: (id) => ({
        url: `Notice/DeleteNotice/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Notice", id }],
    }),
    getMainCarousel: builder.query({
      query: () => `Home/GetMainContent_UI`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Carousel", id })),
              { type: "Carousel", id: "LIST" },
            ]
          : [{ type: "Carousel", id: "LIST" }],
    }),
    getMainCarouselById: builder.query({
      query: (id) => `Home/GetMainContentById/${id}`,
      providesTags: (result, error, id) => [{ type: "Carousel", id }],
    }),
    addMainCarousel: builder.mutation({
      query: (body) => ({
        url: "Home/CreateMainContent",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Carousel", id: "LIST" }],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetNoticeQuery,
  useGetNoticeByIdQuery,
  useAddNoticeMutation,
  useUpdateNoticeMutation,
  useDeleteNoticeMutation,
  useGetMainCarouselQuery,
  useGetMainCarouselByIdQuery,
  useAddMainCarouselMutation,
} = api;
