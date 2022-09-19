import React, { useState } from "react";

import { Button, Alert, Toastr } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import Menu from "./Menu";
import Table from "./Table";

const Contacts = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);

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
              onClick={() => {}}
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
        <Alert
          closeButton={false}
          isOpen={showDeleteAlert}
          message="Are you sure you want to delete this contact? These changes cannot be undone."
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
