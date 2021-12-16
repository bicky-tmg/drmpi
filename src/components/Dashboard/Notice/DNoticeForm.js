import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Spinner } from "react-bootstrap";
import {
  useAddNoticeMutation,
  useUpdateNoticeMutation,
} from "../../../app/services/auth";
import { TextField } from "../../UI/Form/TextField";
import { PickDate } from "../../UI/Form/PickDate";
import { FileUpload } from "../../UI/Form/FileUpload";
import { useMessage } from "../../UI/Messages/MessageProvider";

const schema = Yup.object({
  title: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
});

const DNoticeForm = ({ actionMode, notice, rowId }) => {
  const [
    addNotice,
    {
      isLoading,
      isSuccess: isAddNoticeSuccess,
      error: addNoticeError,
      isError: isAddNoticeError,
    },
  ] = useAddNoticeMutation();
  const [
    updateNotice,
    {
      isLoading: isUpdating,
      isSuccess: isUpdateNoticeSuccess,
      error: updateNoticeError,
      isError: isUpdateNoticeError,
    },
  ] = useUpdateNoticeMutation();
  const { addMessage } = useMessage();

  useEffect(() => {
    if (isAddNoticeSuccess) {
      addMessage("Success", "Notice added successfully");
    }

    if (isUpdateNoticeSuccess) {
      addMessage("Success", "Notice updated successfully");
    }

    if (isAddNoticeError)
      addMessage(
        "Error",
        `Failed to save Notice : ${addNoticeError.data.title}`,
        "bg-danger"
      );

    if (isUpdateNoticeError)
      addMessage(
        "Error",
        `Failed to update Notice : ${updateNoticeError.data.title}`,
        "bg-danger"
      );
  }, [
    isAddNoticeSuccess,
    isUpdateNoticeSuccess,
    isAddNoticeError,
    isUpdateNoticeError,
    addNoticeError,
    updateNoticeError,
    addMessage,
  ]);

  let editTitle, editLocation, editDate;
  if (actionMode === "edit") {
    editTitle = notice?.title;
    editLocation = notice?.location;
    editDate = notice?.date;
  }

  return (
    <Formik
      initialValues={{
        title: editTitle ? editTitle : "",
        location: editLocation ? editLocation : "",
        date: editDate ? new Date(editDate) : new Date(),
        files: undefined,
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        let formData = new FormData();
        formData.append("Title", values.title);
        formData.append("Location", values.location);
        formData.append("Date", values.date.toJSON());
        if (values.files && values.files.length > 0) {
          for (let i = 0; i <= values.files.length; i++) {
            formData.append("Files", values.files[i]);
          }
        }

        if (actionMode === "add") {
          addNotice(formData);
          // console.log(formData);
          resetForm({
            values: {
              title: "",
              location: "",
              date: new Date(),
              files: undefined,
            },
          });
        } else {
          // console.log(values);
          // for (var value of formData.values()) {
          //   console.log(value);
          // }
          updateNotice({ rowId, formData });
        }
      }}
      enableReinitialize
    >
      <Form>
        <TextField name="title" type="text" label="Title" />
        <TextField name="location" type="text" label="Location" />
        <PickDate name="date" className="form-control" label="Date" />
        <FileUpload type="file" name="files" label="Upload Files" multiple />
        <Button
          type="submit"
          disabled={!!isLoading || !!isUpdating}
          className="d-flex align-items-center float-right mt-3"
        >
          {(isLoading || isUpdating) && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              className="mr-3"
            />
          )}
          {actionMode === "add" ? "Add" : "Edit"} Notice
        </Button>
      </Form>
    </Formik>
  );
};

export default DNoticeForm;
