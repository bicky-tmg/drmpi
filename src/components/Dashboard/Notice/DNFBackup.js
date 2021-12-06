import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Row, Form, Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import {
  useAddNoticeMutation,
  useUpdateNoticeMutation,
} from "../../../app/services/auth";

const schema = Yup.object({
  title: Yup.string().required("Required"),
  location: Yup.string().required("Required"),
});


const DNoticeForm = ({ actionMode, notice, rowId }) => {
  const [addNotice, { isLoading }] = useAddNoticeMutation();
  const [updateNotice, { isLoading: isUpdating }] = useUpdateNoticeMutation();

  return (
    <Formik
      initialValues={{
        title: "",
        location: "",
        date: new Date(),
        files: null,
      }}
      validationSchema={schema}
      onSubmit={async (values, { resetForm }) => {
        let formData = new FormData();
        formData.append("title", values.title);
        formData.append("location", values.location);
        formData.append("date", values.date.toJSON());
        if (values.files && values.files.length > 0) {
          for (let i = 0; i <= values.files.length; i++) {
            formData.append("files", values.files[i]);
          }
        }
        try {
          if (actionMode === "add") {
            await addNotice(formData).unwrap();
            resetForm({
              values: {
                title: "",
                location: "",
                date: new Date(),
                files: null,
              },
            });
          } else {
            console.log(formData, rowId);
            await updateNotice({ rowId, formData }).unwrap();
          }
        } catch (err) {
          console.error("Failed to save the post: ", err);
        }
      }}
    >
      {(formik) => (
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              isInvalid={!!formik.touched.title && !!formik.errors.title}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.title}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              isInvalid={!!formik.touched.location && !!formik.errors.location}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.location}
            </Form.Control.Feedback>
          </Form.Group>
          <Row>
            <Form.Group as={Col} md="4" controlId="date">
              <Form.Label>Date</Form.Label>
              <DatePicker
                name="date"
                className="form-control"
                selected={formik.values.date}
                onChange={(date) => formik.setFieldValue("date", date, false)}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="fileInput">
              <Form.Label>Files</Form.Label>
              <Form.Control
                type="file"
                name="files"
                multiple
                onChange={(event) =>
                  formik.setFieldValue("files", event.target.files, false)
                }
              />
            </Form.Group>
          </Row>
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
      )}
    </Formik>
  );
};

export default DNoticeForm;
