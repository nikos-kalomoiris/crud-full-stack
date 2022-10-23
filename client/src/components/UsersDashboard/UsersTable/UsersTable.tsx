import React, { FC, useMemo } from 'react';
import { User } from '../../../interfaces/user.interface';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import Actions from './Actions';

interface Props {
  users: User[];
}

const UsersTable: FC<Props> = ({ users }) => {
  const [rowId, setRowId] = React.useState<string>('');

  const columns = useMemo(
    () => [
      { field: 'id', headerName: 'ID', minWidth: 250 },
      { field: 'firstName', headerName: 'First name', minWidth: 150, flex: 1 },
      { field: 'lastName', headerName: 'Last name', minWidth: 150, flex: 1 },
      { field: 'email', headerName: 'Email', minWidth: 150, flex: 1 },
      { field: 'telephone', headerName: 'Phone', minWidth: 150, flex: 1 },
      {
        field: 'actions',
        headerName: 'Actions',
        type: 'actions',
        minWidth: 150,
        renderCell: (params: any) => <Actions params={params} rowId={rowId} setRowId={setRowId} />,
        flex: 1,
      },
    ],
    [rowId],
  );

  return <DataGrid rows={users} columns={columns} pageSize={10} rowsPerPageOptions={[6]} getRowId={(row: any) => row.id} />;
};

export default UsersTable;
