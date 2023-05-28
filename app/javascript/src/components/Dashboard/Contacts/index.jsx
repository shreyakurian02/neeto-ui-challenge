import React, { useState } from "react";

import classnames from "classnames";
import { Plus } from "neetoicons";
import { Button, Table, Alert, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import MenuBar from "components/Dashboard/MenuBar";
import { SINGULAR, PLURAL } from "constants";

import { ROW_DATA, COMMON_MENU_BLOCKS, DEFAULT_PAGE_SIZE } from "./constants";
import NewContactPane from "./Pane/Create";
import { getColumnData } from "./utils";

const Contacts = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRowIds, setSelectedRowIds] = useState([]);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [isNewContactPaneOpen, setIsNewContactPaneOpen] = useState(false);

  const { t } = useTranslation();

  const handleRowSelect = ids => setSelectedRowIds(ids);

  const handleDelete = () => {
    Toastr.success(
      t("toastr.success.itemDeleted", { entity: t("common.contact", SINGULAR) })
    );
    setIsDeleteAlertOpen(false);
  };

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
                entity: t("common.contact", SINGULAR).toLowerCase(),
              })}
              onClick={() => setIsNewContactPaneOpen(true)}
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
          columnData={getColumnData(setIsDeleteAlertOpen)}
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
        <NewContactPane
          isOpen={isNewContactPaneOpen}
          onClose={() => setIsNewContactPaneOpen(false)}
        />
        <Alert
          isOpen={isDeleteAlertOpen}
          message={t("alerts.deleteMessage", {
            entity: t("common.contact", SINGULAR).toLowerCase(),
          })}
          title={t("alerts.deleteTitle", {
            entity: t("common.contact", SINGULAR).toLowerCase(),
          })}
          onClose={() => setIsDeleteAlertOpen(false)}
          onSubmit={handleDelete}
        />
      </Container>
    </>
  );
};

export default Contacts;
