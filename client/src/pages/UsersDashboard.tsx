import React, { FC, useEffect, useState } from "react";
import { Container, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import "./UsersDashboard.css";
import { getUsers } from "../api/backend.api";
import { User } from "../interfaces/user.interface";
import { appData } from "../utils/constants";
import UsersTable from "../components/UsersDashboard/UsersTable/UsersTable";

interface Props {}

const UsersDashboard: FC<Props> = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const users = await getUsers();
        setUsers(users);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <Container
      maxWidth="xl"
      component="main"
      className="user-dashboard-container"
    >
      <Paper elevation={1} className="card-container">
        <h1>Users Dashboard</h1>
      </Paper>

      <Paper elevation={1} className="card-container table-container">
        {loading ? <h1>loading...</h1> : <UsersTable users={users} />}
      </Paper>
    </Container>
  );
};

export default UsersDashboard;
