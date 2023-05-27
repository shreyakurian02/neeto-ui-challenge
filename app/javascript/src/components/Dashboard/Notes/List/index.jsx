import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";
import { SINGULAR } from "constants";

import Card from "./Card";

const List = ({ notes = [], setShowNewNotePane, setIsDeleteAlertOpen }) => {
  const { t } = useTranslation();

  const isNotesEmpty = notes.length === 0;

  if (isNotesEmpty) {
    return (
      <EmptyState
        image={EmptyNotesListImage}
        primaryAction={() => setShowNewNotePane(true)}
        subtitle={t("emptyState.noteSubtitle")}
        title={t("emptyState.noteTitle")}
        primaryActionLabel={t("button.addEntity", {
          entity: t("common.noteWithCount", SINGULAR),
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
