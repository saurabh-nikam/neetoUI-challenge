import React, { useState } from "react";

import { Select } from "@bigbinary/neetoui";
import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea } from "neetoui/formik";

import notesApi from "apis/notes";

import { NOTES_FORM_VALIDATION_SCHEMA } from "../constants";

const NoteForm = ({ onClose, refetch, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              rows={4}
            />
            <Select
              isClearable
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Assigned Contacts"
              name="ValueList"
              placeholder="Select assigned contact"
              options={[
                {
                  label: "Olive",
                  value: "oliver",
                },
                {
                  label: "James",
                  value: "james",
                },
                {
                  label: "Emily",
                  value: "emily",
                },
              ]}
            />
            <Select
              isMulti
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="ValueList"
              placeholder="Select Tag(s)"
              options={[
                {
                  label: "Getting Started",
                  value: "value1",
                },
                {
                  label: "OnBoarding",
                  value: "value2",
                },
                {
                  label: "User Flows",
                  value: "value3",
                },
                {
                  label: "UX",
                  value: "value4",
                },
                {
                  label: "Bugs",
                  value: "value5",
                },
                {
                  label: "V2",
                  value: "value6",
                },
              ]}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save Changes"}
              loading={isSubmitting}
              size="large"
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button
              label="Cancel"
              size="large"
              style="text"
              onClick={onClose}
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
};

export default NoteForm;
