import React from "react";

import { t } from "i18next";
import { Avatar, Typography } from "neetoui";
import * as yup from "yup";

import { SINGULAR } from "constants";

export const COLUMN_DATA = [
  {
    dataIndex: "name",
    key: "name",
    title: t("common.nameAndRole"),
    render: (text, { profileImage }) => (
      <div className="flex items-center space-x-3">
        <Avatar
          size="large"
          user={{
            imageUrl: profileImage,
            name: text,
          }}
        />
        <Typography style="h4">{text}</Typography>
      </div>
    ),
  },
  {
    dataIndex: "email",
    key: "email",
    title: t("common.email"),
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    title: t("common.createdAt"),
  },
  {
    dataIndex: "action",
    key: "action",
    align: "right",
  },
];

export const ROW_DATA = [
  {
    id: 1,
    name: "Ronald Richards",
    email: "jake.peralta@gmail.com",
    createdAt: "Feb 5, 2021",
    profileImage: "https://i.pravatar.cc/40",
  },
  {
    id: 2,
    name: "Jack Jones",
    email: "jake.peralta@gmail.com",
    createdAt: "Feb 5, 2021",
  },
  {
    id: 3,
    name: "Jack Smith",
    email: "jake.peralta@gmail.com",
    createdAt: "Feb 5, 2021",
    profileImage: "https://i.pravatar.cc/80",
  },
  {
    id: 4,
    name: "Oliver Jones",
    email: "jake.peralta@gmail.com",
    createdAt: "Feb 5, 2021",
  },
  {
    id: 5,
    name: "Jack Smith",
    email: "jake.peralta@gmail.com",
    createdAt: "Feb 5, 2021",
    profileImage: "https://i.pravatar.cc/80",
  },
  {
    id: 6,
    name: "Oliver Jones",
    email: "jake.peralta@gmail.com",
    createdAt: "Feb 5, 2021",
  },
  {
    id: 7,
    name: "Jack Smith",
    email: "jake.peralta@gmail.com",
    createdAt: "Feb 5, 2021",
    profileImage: "https://i.pravatar.cc/80",
  },
  {
    id: 8,
    name: "Oliver Jones",
    email: "jake.peralta@gmail.com",
    createdAt: "Feb 5, 2021",
  },
  {
    id: 9,
    name: "Jack Smith",
    email: "jake.peralta@gmail.com",
    createdAt: "Feb 5, 2021",
    profileImage: "https://i.pravatar.cc/80",
  },
  {
    id: 10,
    name: "Oliver Jones",
    email: "jake.peralta@gmail.com",
    createdAt: "Feb 5, 2021",
  },
];

export const COMMON_MENU_BLOCKS = [
  { label: t("menu.all"), isActive: true },
  { label: t("menu.archived") },
  { label: t("menu.completed") },
  { label: t("menu.phaseTwo") },
];

export const DEFAULT_PAGE_SIZE = 10;

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
