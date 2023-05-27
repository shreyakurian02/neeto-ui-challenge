import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, isDeleteAlertOpen }) => {
  const handleDelete = () => {
    Toastr.success("Note deleted successfully");
    onClose();
  };

  return (
    <Alert
      isOpen={isDeleteAlertOpen}
      message="Are you sure you want to delete the note? This cannot be undone."
      title="Delete Note"
      onClose={onClose}
      onSubmit={handleDelete}
    />
  );
};

export default DeleteAlert;
