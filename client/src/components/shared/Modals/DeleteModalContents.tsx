import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';
import { User } from '../../../interfaces/user.interface';
import { deleteUser } from '../../../api/backend.api';
import { useDispatch } from 'react-redux';
import './Modal.css';
import './DeleteModalContents.css';
import { removeUser } from '../../../redux/slices/UsersSlice';

interface Props {
  handleModalOpen: () => void;
  userData?: User;
}

const DeleteModalContents: FC<Props> = ({ userData, handleModalOpen }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    if (userData && userData._id) {
      await deleteUser(userData._id);
      dispatch(removeUser(userData._id));
      handleModalOpen();
    }
  };

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
        <Button variant="contained" color="inherit" onClick={handleModalOpen} className="button">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="error" className="button" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteModalContents;
