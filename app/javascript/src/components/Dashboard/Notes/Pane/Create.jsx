import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import { SINGULAR } from "constants";

import Form from "./Form";

import { INITIAL_FORM_VALUES } from "../constants";

const Create = ({ fetchNotes, isOpen, onClose }) => {
  const { t } = useTranslation();

  return (
    <Pane isOpen={isOpen} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          {t("headers.addEntity", {
            entity: t("common.note", SINGULAR).toLowerCase(),
          })}
        </Typography>
      </Pane.Header>
      <Form
        isEdit={false}
        note={INITIAL_FORM_VALUES}
        refetch={fetchNotes}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
