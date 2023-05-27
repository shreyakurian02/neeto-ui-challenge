import React from "react";

import { Alert, Toastr } from "neetoui";
import { useTranslation } from "react-i18next";

import { SINGULAR } from "constants";

const DeleteAlert = ({ onClose, isOpen }) => {
  const { t } = useTranslation();

  const handleDelete = () => {
    Toastr.success(
      t("toastr.success.itemDeleted", { entity: t("common.note", SINGULAR) })
    );
    onClose();
  };

  return (
    <Alert
      isOpen={isOpen}
      title={t("alerts.deleteTitle", { entity: t("common.note", SINGULAR) })}
      message={t("alerts.deleteMessage", {
        entity: t("common.note", SINGULAR).toLowerCase(),
      })}
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
