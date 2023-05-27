import { t } from "i18next";
import * as yup from "yup";

export const INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignedContact: null,
  tags: [],
};

export const VALIDATION_SCHEMA = yup.object().shape({
  title: yup
    .string()
    .required(t("validations.required", { entity: t("common.title") })),
  description: yup
    .string()
    .required(t("validations.required", { entity: t("common.description") })),
  assignedContact: yup
    .object()
    .shape({
      label: yup.string(),
      value: yup.string(),
    })
    .nullable()
    .required("Assigned Contact is required"),
  tags: yup
    .array()
    .of(
      yup.object().shape({
        label: yup.string(),
        value: yup.string(),
      })
    )
    .min(1, "Atleast one tag is required")
    .required("Tag is required"),
});

export const COMMON_MENU_BLOCKS = [
  { label: t("menu.all"), count: 200, isActive: true },
  { label: t("menu.users"), count: 80, isActive: false },
  { label: t("menu.leads"), count: 60, isActive: false },
  { label: t("menu.visitors"), count: 60, isActive: false },
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
    label: "Getting Started",
    value: "getting_started",
  },
  {
    label: "Onboarding",
    value: "onboarding",
  },
  {
    label: "User Flow",
    value: "user_flow",
  },
  {
    label: "Bugs",
    value: "bugs",
  },
  {
    label: "UX",
    value: "ux",
  },
  {
    label: "V2",
    value: "v2",
  },
];
