import { configureStore } from '@reduxjs/toolkit';
import users from './reducers/users';
import login from './reducers/login';

export default configureStore({
  reducer: {
    users,
    login,
  },
});
