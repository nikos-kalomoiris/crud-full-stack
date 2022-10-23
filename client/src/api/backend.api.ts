import axios from "axios";
import { User } from "../interfaces/user.interface";

const backendApi = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export const getUsers = async () => {
  try {
    const { data: users } = await backendApi.get("/users");
    return users.data;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (user: User) => {
  return await backendApi.post("/users", user);
};

export const updateUser = async (id: string, data: User) => {
  return await backendApi.put(`/users/${id}`, data);
};

export const deleteUser = async (id: string) => {
  return await backendApi.delete(`/users/${id}`);
};
