import React, { useState, useEffect } from "react";

import { Plus } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";
import { SINGULAR, PLURAL } from "constants";

import {
  TAG_MENU_BLOCKS,
  SEGMENT_MENU_BLOCKS,
  COMMON_MENU_BLOCKS,
} from "./constants";
import DeleteAlert from "./DeleteAlert";
import List from "./List";
import NewNotePane from "./Pane/Create";

import MenuBar from "../MenuBar";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isNewNotePane, setIsNewNotePane] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useTranslation();

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => fetchNotes(), []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <MenuBar
        commonBlocks={COMMON_MENU_BLOCKS}
        segmentBlocks={SEGMENT_MENU_BLOCKS}
        showMenu={isMenuOpen}
        tagBlocks={TAG_MENU_BLOCKS}
        title={t("common.note", PLURAL)}
      />
      <Container>
        <Header
          menuBarToggle={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
          title={t("common.allNotes")}
          actionBlock={
            <Button
              icon={Plus}
              label={t("button.addEntity", {
                entity: t("common.note", SINGULAR).toLowerCase(),
              })}
              onClick={() => setIsNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: t("placeholder.search"),
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <List
          notes={notes}
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
          setIsNewNotePane={setIsNewNotePane}
        />
        <NewNotePane
          fetchNotes={fetchNotes}
          isOpen={isNewNotePane}
          onClose={() => setIsNewNotePane(false)}
        />
        <DeleteAlert
          isOpen={isDeleteAlertOpen}
          onClose={() => setIsDeleteAlertOpen(false)}
        />
      </Container>
    </>
  );
};

export default Notes;
