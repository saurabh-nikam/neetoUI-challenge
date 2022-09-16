import React from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({ onClose, handleDelete }) => (
  <Alert
    isOpen
    message="Are you sure about deleting this note? This can't be undone, Press continue to delete permanently."
    title="Delete note?"
    onClose={onClose}
    onSubmit={handleDelete}
  />
);

export default DeleteAlert;
