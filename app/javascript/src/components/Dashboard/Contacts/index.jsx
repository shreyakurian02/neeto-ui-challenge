import React, { useState } from "react";

import classnames from "classnames";
import { Plus, MenuHorizontal } from "neetoicons";
import { Button, Table, Dropdown } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";
import { noop } from "utils";

import MenuBar from "components/Dashboard/MenuBar";
import { SINGULAR, PLURAL } from "constants";

import {
  COLUMN_DATA,
  ROW_DATA,
  COMMON_MENU_BLOCKS,
  DEFAULT_PAGE_SIZE,
} from "./constants";

const Contacts = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const {
    Menu,
    MenuItem: { Button: MenuButton },
  } = Dropdown;

  const { t } = useTranslation();

  const handleRowSelect = ids => setSelectedRowIds(ids);

  const columnData = COLUMN_DATA.map(column => {
    if (column.key === "action") {
      return {
        ...column,
        render: () => (
          <Dropdown buttonStyle="text" className="p-4" icon={MenuHorizontal}>
            <Menu>
              <MenuButton onClick={noop}>{t("actions.edit")}</MenuButton>
              <MenuButton onClick={noop}>{t("actions.delete")}</MenuButton>
            </Menu>
          </Dropdown>
        ),
      };
    }

    return column;
  });

  return (
    <>
      <MenuBar
        commonBlocks={COMMON_MENU_BLOCKS}
        showMenu={isMenuOpen}
        title={t("common.contact", PLURAL)}
      />
      <Container>
        <Header
          menuBarToggle={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
          title={t("common.allContacts")}
          actionBlock={
            <Button
              icon={Plus}
              label={t("button.addEntity", {
                entity: t("common.contact", SINGULAR),
              })}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: t("placeholder.search"),
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table
          fixedHeight
          rowSelection
          columnData={columnData}
          defaultPageSize={DEFAULT_PAGE_SIZE}
          rowData={ROW_DATA}
          selectedRowKeys={selectedRowIds}
          shouldDynamicallyRenderRowSize={false}
          totalCount={20}
          rowClassName={(_, index) =>
            classnames({ "neeto-ui-bg-gray-200": index % 2 !== 0 })
          }
          onRowSelect={handleRowSelect}
        />
      </Container>
    </>
  );
};

export default Contacts;
