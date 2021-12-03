import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_DRMPI_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
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
    }),
    getNoticeById: builder.query({
      query: (id) => `Notice/GetNoticeById/${id}`,
    }),
    addNotice: builder.mutation({
      query: (noticeData) => ({
        url: "Notice/CreateNotice",
        method: "POST",
        body: noticeData,
      }),
    }),
    updateNotice: builder.mutation({
      query: ({id, noticeData}) => ({
        url: `Notice/UpdateNotice/${id}`,
        method: "PUT",
        body: noticeData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useGetNoticeQuery,
  useGetNoticeByIdQuery,
  useAddNoticeMutation,
  useUpdateNoticeMutation,
} = api;
