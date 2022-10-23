import React, { FC } from "react";
import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { User } from "../../../interfaces/user.interface";
import UserForm from "../Forms/UserForm";
import "./Modal.css";

interface Props {
  isModalOpen: boolean;
  handleModalOpen: () => void;
  userData: User;
}

const EditModal: FC<Props> = ({ isModalOpen, handleModalOpen, userData }) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={handleModalOpen}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DialogTitle>Edit User</DialogTitle>
      <DialogContent>
        <UserForm
          type="edit"
          userData={userData}
          handleModalOpen={handleModalOpen}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
