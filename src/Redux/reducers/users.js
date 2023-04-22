import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: JSON.parse(localStorage.getItem('users')) || {},
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      const { username, password } = action.payload;
      state.users[username] = password
      localStorage.setItem('users', JSON.stringify(state.users));
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
