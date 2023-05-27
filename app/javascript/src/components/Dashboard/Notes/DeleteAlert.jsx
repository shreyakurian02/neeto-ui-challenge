import React from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

import { SINGULAR } from "constants";

const DeleteAlert = ({ onClose, isOpen }) => {
  const { t } = useTranslation();

  const handleDelete = () => {
    Toastr.success(
      t("toastr.success.itemDeleted", {
        entity: t("common.noteWithCount", SINGULAR),
      })
    );
    onClose();
  };

  return (
    <Alert
      isOpen={isOpen}
      message={t("alerts.deleteMessage", {
        entity: t("common.noteWithCount", SINGULAR).toLowerCase(),
      })}
      title={t("alerts.deleteTitle", {
        entity: t("common.noteWithCount", SINGULAR),
      })}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
