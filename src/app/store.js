import { configureStore } from '@reduxjs/toolkit';
import giftsReducer from '../features/gifts/giftsSlice'
import usersReducer from '../features/users/usersSlice'

export default configureStore({
  reducer: {
    gifts: giftsReducer,
    users: usersReducer,
  },
});
