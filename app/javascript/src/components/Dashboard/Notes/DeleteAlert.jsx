import React from "react";

import { Alert } from "neetoui";

const DeleteAlert = ({ onClose, handleDelete }) => (
  <Alert
    isOpen
    message="Are you sure you want to delete this note? This cannot be undone."
    size="sm"
    title="Delete note?"
    onClose={onClose}
    onSubmit={handleDelete}
  />
);

export default DeleteAlert;
