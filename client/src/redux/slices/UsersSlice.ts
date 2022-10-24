import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../interfaces/user.interface';

interface IInitialState {
  users: User[];
}

const initialState = {
  users: [],
};

type InitialStateT = IInitialState;

export const userSlice = createSlice({
  name: 'users',
  initialState: initialState as InitialStateT,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user._id !== action.payload);
    },
    alterUser: (state, action) => {
      const data = action.payload;
      const userIndex = state.users.findIndex((user) => user._id === data._id);
      state.users[userIndex] = data;
    },
  },
});

export default userSlice.reducer;
export const { setUsers, addUser, removeUser, alterUser } = userSlice.actions;
