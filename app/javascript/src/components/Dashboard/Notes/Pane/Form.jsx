import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Button, Pane } from "neetoui";
import { Input, Select, Textarea } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";
import { PLURAL } from "constants";

import { VALIDATION_SCHEMA, TAGS, ASSIGNED_CONTACTS } from "../constants";

const Form = ({ onClose, refetch, note, isEdit }) => {
  const { t } = useTranslation();

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
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm noValidate className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label={t("common.title")}
              name="title"
              placeholder={t("placeholder.enterField", {
                field: t("common.title").toLowerCase(),
              })}
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label={t("common.description")}
              name="description"
              rows={1}
              placeholder={t("placeholder.enterField", {
                field: t("common.description").toLowerCase(),
              })}
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label={t("common.assignedContact")}
              name="assignedContact"
              options={ASSIGNED_CONTACTS}
              placeholder={t("placeholder.selectRole")}
            />
            <Select
              isMulti
              isSearchable
              required
              className="w-full flex-grow-0"
              label={t("common.tag", PLURAL)}
              name="tags"
              options={TAGS}
              placeholder={t("placeholder.selectTags")}
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              icon={Check}
              label={isEdit ? t("button.update") : t("button.saveChanges")}
              loading={isSubmitting}
              type="submit"
            />
            <Button label={t("button.cancel")} style="text" onClick={onClose} />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
