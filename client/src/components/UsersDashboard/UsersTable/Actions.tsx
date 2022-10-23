import React, { FC } from 'react';
import { Box, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import './Actions.css';
import UserFormModal from '../../shared/Modals/UserModal';

interface Props {
  params: any;
  rowId: string;
  setRowId: (rowId: string) => void;
}

const Actions: FC<Props> = ({ params, rowId, setRowId }) => {
  const [isUserModalOpen, setIsUserModalOpen] = React.useState<boolean>(false);
  const [modalType, setModalType] = React.useState<'create' | 'edit' | 'delete'>('create');

  const handleUserModalOpen = () => {
    setIsUserModalOpen(!isUserModalOpen);
  };

  const handleEdit = () => {
    handleUserModalOpen();
    setModalType('edit');
  };

  const handleDelete = () => {
    handleUserModalOpen();
    setModalType('delete');
  };

  return (
    <>
      <Box>
        <IconButton aria-label="edit" size="small" onClick={handleEdit}>
          <Edit />
        </IconButton>
        <IconButton aria-label="edit" size="small" color="error" onClick={handleDelete}>
          <Delete />
        </IconButton>
      </Box>
      <UserFormModal isModalOpen={isUserModalOpen} handleModalOpen={handleUserModalOpen} userData={params.row} type={modalType} />
    </>
  );
};

export default Actions;
