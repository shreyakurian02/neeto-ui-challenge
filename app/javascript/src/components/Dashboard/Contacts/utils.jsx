import React from "react";

import { t } from "i18next";
import { MenuHorizontal } from "neetoicons";
import { Avatar, Typography, Dropdown } from "neetoui";
import { noop } from "utils";

const {
  Menu,
  MenuItem: { Button: MenuButton },
} = Dropdown;

export const buildColumnData = setIsDeleteAlertOpen => [
  {
    dataIndex: "name",
    key: "name",
    title: t("common.nameAndRole"),
    render: (name, { profileImage, role }) => (
      <div className="flex items-center space-x-3">
        <Avatar size="large" user={{ imageUrl: profileImage, name }} />
        <div className="flex flex-col">
          <Typography style="h5">{name}</Typography>
          <Typography className="neeto-ui-text-gray-700" style="body3">
            {role}
          </Typography>
        </div>
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
    render: () => (
      <Dropdown buttonStyle="text" className="p-4" icon={MenuHorizontal}>
        <Menu>
          <MenuButton onClick={noop}>{t("actions.edit")}</MenuButton>
          <MenuButton onClick={() => setIsDeleteAlertOpen(true)}>
            {t("actions.delete")}
          </MenuButton>
        </Menu>
      </Dropdown>
    ),
  },
];
