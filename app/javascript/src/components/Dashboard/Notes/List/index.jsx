import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";
import { SINGULAR, PLURAL } from "constants";

import Card from "./Card";

const List = ({ notes = [], setIsNewNotePane, setIsDeleteAlertOpen }) => {
  const { t } = useTranslation();

  if (!notes.length) {
    return (
      <EmptyState
        image={EmptyNotesListImage}
        primaryAction={() => setIsNewNotePane(true)}
        subtitle={t("emptyState.noteSubtitle")}
        primaryActionLabel={t("button.addEntity", {
          entity: t("common.note", SINGULAR).toLowerCase(),
        })}
        title={t("emptyState.entityTitle", {
          entity: t("common.note", PLURAL).toLowerCase(),
        })}
      />
    );
  }

  return (
    <div className="w-full space-y-2">
      {notes.map(note => (
        <Card
          key={note.id}
          note={note}
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
        />
      ))}
    </div>
  );
};

export default List;
