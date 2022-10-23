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
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export default userSlice.reducer;
export const { setUsers, addUser, removeUser } = userSlice.actions;