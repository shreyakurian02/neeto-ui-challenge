import React from "react";

import { t } from "i18next";
import { Avatar, Typography } from "neetoui";

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
  { label: t("menu.all"), count: 0, isActive: true },
  { label: t("menu.archived"), count: 0 },
  { label: t("menu.completed"), count: 0 },
  { label: t("menu.phaseTwo"), count: 0 },
];

export const DEFAULT_PAGE_SIZE = 10;
