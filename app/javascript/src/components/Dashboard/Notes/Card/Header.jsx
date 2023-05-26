import React from "react";

import { MenuVertical } from "neetoicons";
import { Typography, Dropdown } from "neetoui";
import { useTranslation } from "react-i18next";

const Header = ({ title }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between">
      <Typography style="h4">{title}</Typography>
      <Dropdown buttonStyle="text" className="p-4" icon={MenuVertical}>
        <Dropdown.Menu>
          <Dropdown.MenuItem.Button onClick={() => {}}>
            {t("actions.edit")}
          </Dropdown.MenuItem.Button>
          <Dropdown.MenuItem.Button onClick={() => {}}>
            {t("actions.delete")}
          </Dropdown.MenuItem.Button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
