import React, { useState } from "react";

import { Button, Alert, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Menu from "./Menu";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [showNewContactPane, setShowNewContactPane] = useState(false);

  const handleSubmit = () => {
    setShowDeleteAlert(showDeleteAlert => !showDeleteAlert);
    Toastr.success("Contact deleted successfully.");
  };
  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add New Contact"
              onClick={() => {
                setShowNewContactPane(true);
              }}
            />
          }
          menuBarToggle={() => {
            setShowMenu(prevSetShowMenu => !prevSetShowMenu);
          }}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table
          showAlert={() =>
            setShowDeleteAlert(showDeleteAlert => !showDeleteAlert)
          }
        />
        <NewContactPane
          setShowPane={setShowNewContactPane}
          showPane={showNewContactPane}
        />
        <Alert
          closeButton={false}
          isOpen={showDeleteAlert}
          message="Are you sure you want to delete this contact? This change cannot be undone."
          size="md"
          title="Delete Contact"
          onClose={() => setShowDeleteAlert(false)}
          onSubmit={() => handleSubmit()}
        />
      </Container>
    </>
  );
};
export default Contacts;
