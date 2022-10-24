import React, { FC, useEffect, useState } from 'react';
import { Container, Fab, Paper, Typography } from '@mui/material';
import './UsersDashboard.css';
import { getUsers } from '../api/backend.api';
import { User } from '../interfaces/user.interface';
import UsersTable from '../components/UsersDashboard/UsersTable/UsersTable';
import { Add } from '@mui/icons-material';
import UserFormModal from '../components/shared/Modals/UserModal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setUsers } from '../redux/slices/UsersSlice';

interface Props {}

const UsersDashboard: FC<Props> = () => {
  const dispatch = useDispatch();
  const users: User[] = useSelector((state: RootState) => state.users.users);
  const [loading, setLoading] = useState<boolean>(false);
  const [createUserModalIsOpen, setCreateUserModalIsOpen] = useState<boolean>(false);

  const handleModalOpen = () => {
    setCreateUserModalIsOpen(!createUserModalIsOpen);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const users = await getUsers();
      dispatch(setUsers(users));
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Container maxWidth="xl" component="main" className="user-dashboard-container">
        <Paper elevation={1} className="card-container flex justify-between">
          <div className="flex flex-col align-middle justify-center">
            <Typography variant="h5">Users Dashboard</Typography>
          </div>
          <Fab color="success" variant="extended" aria-label="add" onClick={handleModalOpen}>
            <Add />
            Create User
          </Fab>
        </Paper>

        <Paper elevation={1} className="card-container table-container">
          {loading ? <h1>loading...</h1> : <UsersTable users={users} />}
        </Paper>
      </Container>
      <UserFormModal isModalOpen={createUserModalIsOpen} handleModalOpen={handleModalOpen} type="create" />
    </>
  );
};

export default UsersDashboard;
