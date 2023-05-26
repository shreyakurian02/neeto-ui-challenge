import React, { useState, useEffect } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import notesApi from "apis/notes";
import EmptyState from "components/commons/EmptyState";

import Card from "./Card";
import {
  NOTES_TAGS_MENU,
  NOTES_SEGMENTS_MENU,
  NOTES_COMMON_MENU,
} from "./constants";
import DeleteAlert from "./DeleteAlert";
import NewNotePane from "./Pane/Create";

import Menubar from "../Menubar";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedNoteIds, setSelectedNoteIds] = useState([]);
  const [notes, setNotes] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetchNotes();
  }, []);

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

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <Menubar
        commonBlocks={NOTES_COMMON_MENU}
        segmentBlocks={NOTES_SEGMENTS_MENU}
        showMenu={isMenuOpen}
        tagBlocks={NOTES_TAGS_MENU}
        title="Notes"
      />
      <Container>
        <Header
          menuBarToggle={() => setIsMenuOpen(prevState => !prevState)}
          title="All Notes"
          actionBlock={
            <Button
              icon={Plus}
              label="Add Note"
              size="small"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          searchProps={{
            value: searchTerm,
            placeholder: "Search Name, Email, Phone Number Etc.",
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notes.length ? (
          notes.map(note => <Card key={note.id} note={note} />)
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add new note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            refetch={fetchNotes}
            selectedNoteIds={selectedNoteIds}
            setSelectedNoteIds={setSelectedNoteIds}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
