import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import EmptyState from "components/Common/EmptyState";

import { NOTES as notesList } from "./constants";
import DeleteAlert from "./DeleteAlert";
import Note from "./Note";
import NotesMenu from "./NotesMenu";
import Create from "./Pane/Create";

const Notes = () => {
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const EmptyNotesListImage = "https://i.pravatar.cc/300";

  return (
    <>
      <NotesMenu showMenu={showMenu} />
      <Container>
        <Header
          title="All Notes"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Note"
              onClick={() => setShowNewNotePane(true)}
            />
          }
          menuBarToggle={() => {
            setShowMenu(!showMenu);
          }}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {notesList.length ? (
          <div className="mt-2 flex w-full flex-col">
            {notesList.map((note, index) => (
              <Note key={index} note={note} />
            ))}
          </div>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={() => setShowNewNotePane(true)}
            primaryActionLabel="Add New Note"
            subtitle="Add your notes to send customized emails to them."
            title="Looks like you don't have any notes!"
          />
        )}
        <Create
          fetchNotes={notesList}
          setShowPane={setShowNewNotePane}
          showPane={showNewNotePane}
        />
        {showDeleteAlert && (
          <DeleteAlert onClose={() => setShowDeleteAlert(false)} />
        )}
      </Container>
    </>
  );
};

export default Notes;
