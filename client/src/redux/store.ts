import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './slices/UsersSlice';

const reducers = combineReducers({
  users: userSlice.reducer,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
