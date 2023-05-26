import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";
import { useTranslation } from "react-i18next";
import { noop } from "utils";

const Header = ({ title }) => {
  const { t } = useTranslation();

  const {
    Menu,
    MenuItem: { Button },
  } = Dropdown;

  return (
    <div className="flex justify-between">
      <Typography style="h4">{title}</Typography>
      <Dropdown buttonStyle="text" className="p-4" icon={MenuVertical}>
        <Menu>
          <Button onClick={noop}>{t("actions.edit")}</Button>
          <Button onClick={noop}>{t("actions.delete")}</Button>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
