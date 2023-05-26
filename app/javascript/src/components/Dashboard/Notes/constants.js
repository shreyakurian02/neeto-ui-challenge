import { t } from "i18next";
import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required(t("validations", { entity: "common.title" })),
  description: yup
    .string()
    .required(t("validations", { entity: "common.description" })),
});

export const NOTES_COMMON_MENU = [
  { label: t("menu.all"), count: 200, isActive: true },
  { label: t("menu.users"), count: 80, isActive: false },
  { label: t("menu.leads"), count: 60, isActive: false },
  { label: t("menu.visitors"), count: 60, isActive: false },
];

export const NOTES_SEGMENTS_MENU = [
  { label: t("menu.europe"), count: 80 },
  { label: t("menu.middleEast"), count: 60 },
  { label: t("menu.asia"), count: 60 },
];

export const NOTES_TAGS_MENU = [
  { label: t("menu.sales"), count: 80 },
  { label: t("menu.finance"), count: 60 },
  { label: t("menu.userExperience"), count: 60 },
];

export const USER_AVATAR_URL =
  "https://randomuser.me/api/portraits/women/80.jpg";
