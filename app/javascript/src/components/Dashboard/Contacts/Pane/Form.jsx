import React from "react";

import { Formik, Form as FormikForm } from "formik";
import { Check } from "neetoicons";
import { Toastr, Pane, Button } from "neetoui";
import { Input, Select } from "neetoui/formik";
import { useTranslation } from "react-i18next";

import { SINGULAR, PLURAL } from "constants";

import { INITIAL_FORM_VALUES, ROLES, VALIDATION_SCHEMA } from "../constants";

const Form = ({ onClose }) => {
  const { t } = useTranslation();

  const handleSubmit = () => {
    Toastr.success(
      t("toastr.success.itemAdded", { entity: t("common.contact", SINGULAR) })
    );
    onClose();
  };

  return (
    <Formik
      initialValues={INITIAL_FORM_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      <FormikForm noValidate>
        <Pane.Body className="space-y-6">
          <div className="flex w-full space-x-2">
            <Input
              required
              label={t("common.firstName")}
              name="firstName"
              placeholder={t("placeholder.enterField", {
                field: t("common.firstName").toLowerCase(),
              })}
            />
            <Input
              required
              label={t("common.lastName")}
              name="lastName"
              placeholder={t("placeholder.enterField", {
                field: t("common.lastName").toLowerCase(),
              })}
            />
          </div>
          <Input
            required
            className="w-full flex-grow-0"
            label={t("common.emailAddress")}
            name="email"
            placeholder={t("placeholder.enterField", {
              field: t("common.emailAddress").toLowerCase(),
            })}
          />
          <Select
            isSearchable
            required
            className="w-full flex-grow-0"
            label={t("common.role", PLURAL)}
            name="role"
            options={ROLES}
            placeholder={t("placeholder.selectRole")}
          />
        </Pane.Body>
        <Pane.Footer>
          <Button
            className="mr-3"
            icon={Check}
            label={t("button.saveChanges")}
            type="submit"
          />
          <Button
            label={t("button.cancel")}
            style="text"
            type="reset"
            onClick={onClose}
          />
        </Pane.Footer>
      </FormikForm>
    </Formik>
  );
};
export default Form;
