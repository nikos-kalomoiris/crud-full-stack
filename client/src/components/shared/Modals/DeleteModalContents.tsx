import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';
import { User } from '../../../interfaces/user.interface';
import './Modal.css';
import './DeleteModalContents.css';

interface Props {
  handleModalOpen: () => void;
  userData?: User;
}

const DeleteModalContents: FC<Props> = ({ userData, handleModalOpen }) => {
  return (
    <div className="delete-modal-contents-container">
      <Typography variant="subtitle1">
        Are you sure you want to delete user{' '}
        <span className="text-highlights">
          {userData?.firstName} {userData?.lastName}
        </span>{' '}
        with email <span className="text-highlights">{userData?.email}</span>?
      </Typography>
      <div className="buttons-container">
        <Button variant="contained" color="error" onClick={handleModalOpen} className="button">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary" className="button">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteModalContents;
