import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: JSON.parse(localStorage.getItem('user')) || '' ,
};

const currentUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser(state, action) {
      state.currentUser =  action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutUser(state) {
      state.currentUser = '';
      localStorage.removeItem('user');
    },
  },
});

export const { loginUser, logoutUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
