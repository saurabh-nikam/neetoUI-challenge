import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

const Create = ({ setShowPane, showPane }) => {
  const onClose = () => setShowPane(false);
  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
        </Typography>
      </Pane.Header>
      <Form onClose={onClose} />
    </Pane>
  );
};

export default Create;
