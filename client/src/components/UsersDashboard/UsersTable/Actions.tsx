import React, { FC } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import "./Actions.css";
import EditModal from "../../shared/Modals/EditModal";

interface Props {
  params: any;
  rowId: string;
  setRowId: (rowId: string) => void;
}

const Actions: FC<Props> = ({ params, rowId, setRowId }) => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleEdit = () => {
    handleModalOpen();
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <>
      <Box>
        <IconButton aria-label="edit" size="small" onClick={handleEdit}>
          <Edit />
        </IconButton>
        <IconButton
          aria-label="edit"
          size="small"
          color="error"
          onClick={handleDelete}
        >
          <Delete />
        </IconButton>
      </Box>
      <EditModal
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
        userData={params.row}
      />
    </>
  );
};

export default Actions;
