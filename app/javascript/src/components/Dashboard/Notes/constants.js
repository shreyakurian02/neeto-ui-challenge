import { t } from "i18next";
import * as yup from "yup";

import { SINGULAR } from "constants";

export const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .matches(/.*[a-zA-Z0-9].*/, t("validations.validAlphaNumeric"))
    .required(t("validations.required", { entity: t("common.title") })),
  description: yup
    .string()
    .required(t("validations.required", { entity: t("common.description") })),
  assignedContact: yup
    .object()
    .shape({ label: yup.string(), value: yup.string() })
    .nullable()
    .required(
      t("validations.required", { entity: t("common.assignedContact") })
    ),
  tags: yup
    .array()
    .of(yup.object().shape({ label: yup.string(), value: yup.string() }))
    .min(
      1,
      t("validations.minimum", {
        value: 1,
        entity: t("common.tag", SINGULAR).toLowerCase(),
      })
    )
    .required(t("validations.required", { entity: t("common.tag", SINGULAR) })),
});

export const COMMON_MENU_BLOCKS = [
  { label: t("menu.all"), count: 200, isActive: true },
  { label: t("menu.users"), count: 80 },
  { label: t("menu.leads"), count: 60 },
  { label: t("menu.visitors"), count: 60 },
];

export const SEGMENT_MENU_BLOCKS = [
  { label: t("menu.europe"), count: 80 },
  { label: t("menu.middleEast"), count: 60 },
  { label: t("menu.asia"), count: 60 },
];

export const TAG_MENU_BLOCKS = [
  { label: t("menu.sales"), count: 80 },
  { label: t("menu.finance"), count: 60 },
  { label: t("menu.userExperience"), count: 60 },
];

export const USER_AVATAR_URL =
  "https://randomuser.me/api/portraits/women/80.jpg";

export const ASSIGNED_CONTACTS = [
  { label: "Oliver Smith", value: "oliver-smith" },
  { label: "Eve Smith", value: "eve-smith" },
  { label: "Sam Smith", value: "sam-smith" },
];

export const TAGS = [
  {
    label: t("common.gettingStarted"),
    value: "getting_started",
  },
  {
    label: t("common.onboarding"),
    value: "onboarding",
  },
  {
    label: t("common.userFlow"),
    value: "user_flow",
  },
  {
    label: t("common.bugs"),
    value: "bugs",
  },
  {
    label: t("common.ux"),
    value: "ux",
  },
  {
    label: t("common.v2"),
    value: "v2",
  },
];
