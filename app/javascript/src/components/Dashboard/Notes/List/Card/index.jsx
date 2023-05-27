import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";
import { useTranslation } from "react-i18next";
import { noop } from "utils";

import Footer from "./Footer";

const Card = ({ note, setIsDeleteAlertOpen }) => {
  const { t } = useTranslation();

  const { description, title, created_at: createdAt } = note;
  const {
    Menu,
    MenuItem: { Button },
  } = Dropdown;

  return (
    <div className="neeto-ui-shadow-xs neeto-ui-border-gray-300 neeto-ui-rounded-sm w-full border p-4">
      <div className="flex justify-between">
        <Typography style="h4">{title}</Typography>
        <Dropdown buttonStyle="text" className="p-4" icon={MenuVertical}>
          <Menu>
            <Button onClick={noop}>{t("actions.edit")}</Button>
            <Button onClick={() => setIsDeleteAlertOpen(true)}>
              {t("actions.delete")}
            </Button>
          </Menu>
        </Dropdown>
      </div>
      <Typography className="neeto-ui-text-gray-600" style="body2">
        {description}
      </Typography>
      <hr className="my-3" />
      <Footer createdAt={createdAt} />
    </div>
  );
};

export default Card;
