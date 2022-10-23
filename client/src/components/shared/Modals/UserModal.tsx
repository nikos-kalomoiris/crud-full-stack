import React, { FC } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { User } from '../../../interfaces/user.interface';
import UserForm from '../Forms/UserForm';
import './Modal.css';
import DeleteModalContents from './DeleteModalContents';

interface Props {
  isModalOpen: boolean;
  handleModalOpen: () => void;
  userData?: User;
  type: 'create' | 'edit' | 'delete';
}

const UserModal: FC<Props> = ({ isModalOpen, handleModalOpen, userData, type }) => {
  const getModalTitle = () => {
    switch (type) {
      case 'create':
        return 'Create User';
      case 'edit':
        return 'Edit User';
      case 'delete':
        return 'Delete User';
      default:
        return 'Modal';
    }
  };

  return (
    <Dialog open={isModalOpen} onClose={handleModalOpen} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <DialogTitle>{getModalTitle()}</DialogTitle>
      <DialogContent>
        {type === 'delete' ? <DeleteModalContents userData={userData} handleModalOpen={handleModalOpen} /> : <UserForm type={type} userData={userData} handleModalOpen={handleModalOpen} />}
      </DialogContent>
    </Dialog>
  );
};

export default UserModal;
