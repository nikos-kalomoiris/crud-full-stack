import React, { FC } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import "./Actions.css";

interface Props {
  params: any;
  rowId: string;
  setRowId: (rowId: string) => void;
}

const Actions: FC<Props> = ({ params, rowId, setRowId }) => {
  const handleEdit = () => {
    console.log("edit");
    console.log("params", params);
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
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
  );
};

export default Actions;
