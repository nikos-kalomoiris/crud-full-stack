import React, { FC, useMemo } from "react";
import { Box, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import "./Actions.css";
import { User } from "../../../interfaces/user.interface";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import Actions from "./Actions";

interface Props {
  users: User[];
}

const UsersTable: FC<Props> = ({ users }) => {
  const [rowId, setRowId] = React.useState<string>("");

  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 200 },
      { field: "firstName", headerName: "First name", width: 150 },
      { field: "lastName", headerName: "Last name", width: 150 },
      { field: "email", headerName: "Email", width: 150 },
      { field: "telephone", headerName: "Phone", width: 150 },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        width: 150,
        renderCell: (params: any) => (
          <Actions params={params} rowId={rowId} setRowId={setRowId} />
        ),
      },
    ],
    [rowId]
  );

  return (
    <DataGrid
      rows={users}
      columns={columns}
      pageSize={6}
      rowsPerPageOptions={[6]}
    />
  );
};

export default UsersTable;
