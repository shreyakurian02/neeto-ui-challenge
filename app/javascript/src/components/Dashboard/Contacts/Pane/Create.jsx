import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import { SINGULAR } from "constants";

import Form from "./Form";

const Create = ({ isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Pane isOpen={isOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("headers.addEntity", {
            entity: t("common.contact", SINGULAR).toLowerCase(),
          })}
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} />
    </Pane>
  );
};

export default Create;
