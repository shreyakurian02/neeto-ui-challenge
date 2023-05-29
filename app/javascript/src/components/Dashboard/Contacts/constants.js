import { t } from "i18next";
import * as yup from "yup";

import { SINGULAR } from "constants";

export const ROW_DATA = Array.from({ length: 12 }, (_, index) => {
  const isEven = index % 2 === 0;

  return {
    id: index + 1,
    name: isEven ? "Ronald Richards" : "Jack Jones",
    email: "albert@borer.com",
    createdAt: "Feb 5, 2021",
    role: "owner",
    profileImage: isEven && "https://i.pravatar.cc/40",
  };
});

export const COMMON_MENU_BLOCKS = [
  { label: t("menu.all"), isActive: true },
  { label: t("menu.archived") },
  { label: t("menu.completed") },
  { label: t("menu.phaseTwo") },
];

export const DEFAULT_PAGE_SIZE = 10;

export const TOTAL_RECORD_COUNT = 20;

export const INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  role: null,
};

export const VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup
    .string()
    .required(t("validations.required", { entity: t("common.firstName") })),
  lastName: yup
    .string()
    .required(t("validations.required", { entity: t("common.lastName") })),
  email: yup
    .string()
    .email(t("validations.invalidEmail"))
    .required(t("validations.required", { entity: t("common.emailAddress") })),
  role: yup
    .object()
    .shape({ label: yup.string(), value: yup.string() })
    .nullable()
    .required(
      t("validations.required", { entity: t("common.role", SINGULAR) })
    ),
});

export const ROLES = [
  { label: t("common.admin"), value: "admin" },
  { label: t("common.owner"), value: "owner" },
];
