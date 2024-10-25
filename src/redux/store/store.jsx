import userSlice from '../reducers/userSlice';
import adminSlice from '../reducers/adminSlice'
import spinnerSlice from '../reducers/spinnerSlice'
import quanLyPhimSlice from '../reducers/quanLyPhimSlice'
import { configureStore } from '@reduxjs/toolkit';

let store = configureStore({
    reducer: {
      userSlice,
      spinnerSlice,
      adminSlice,
      quanLyPhimSlice
    },
  })

export default store