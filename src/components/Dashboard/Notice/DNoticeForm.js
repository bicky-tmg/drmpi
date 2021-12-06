import React, { useEffect } from "react";
import { Form, Formik, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import { Button, Col, Row, Form as RBForm, Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import {
  useAddNoticeMutation,
  useUpdateNoticeMutation,
} from "../../../app/services/auth";
import { useMessage } from "../../UI/Messages/MessageProvider";

const schema = Yup.object({
  title: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
});

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <RBForm.Group controlId={props.name || props.id}>
      <RBForm.Label>{label}</RBForm.Label>
      <RBForm.Control
        {...field}
        {...props}
        isInvalid={Boolean(meta.touched && meta.error)}
      />
      <RBForm.Control.Feedback type="invalid">
        {meta.error}
      </RBForm.Control.Feedback>
    </RBForm.Group>
  );
};

const PickDate = ({ label, ...props }) => {
  const [field] = useField(props);
  const { setFieldValue } = useFormikContext();
  return (
    <Row>
      <RBForm.Group as={Col} md="4" controlId={props.name || props.id}>
        <RBForm.Label>{label}</RBForm.Label>
        <DatePicker
          {...field}
          {...props}
          selected={field.value}
          onChange={(date) =>
            setFieldValue(`${props.name || props.id}`, date, false)
          }
        />
      </RBForm.Group>
    </Row>
  );
};

const FileUpload = ({ label, ...props }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <Row>
      <RBForm.Group as={Col} md="4" controlId={props.name || props.id}>
        <RBForm.Label>{label}</RBForm.Label>
        <RBForm.Control
          {...props}
          onChange={(event) =>
            setFieldValue(
              `${props.name || props.id}`,
              event.target.files,
              false
            )
          }
        />
      </RBForm.Group>
    </Row>
  );
};

const DNoticeForm = ({ actionMode, notice, rowId }) => {
  const [
    addNotice,
    {
      isLoading,
      isSuccess: isAddNoticeSuccess,
      isError: isAddNoticeError,
    },
  ] = useAddNoticeMutation();
  const [
    updateNotice,
    {
      isLoading: isUpdating,
      isSuccess: isUpdateNoticeSuccess,
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
        `Failed to save Notice`,
        "bg-danger"
      );

    if (isUpdateNoticeError)
      addMessage(
        "Error",
        `Failed to update Notice`,
        "bg-danger"
      );
  }, [
    isAddNoticeSuccess,
    isUpdateNoticeSuccess,
    isAddNoticeError,
    isUpdateNoticeError,
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
