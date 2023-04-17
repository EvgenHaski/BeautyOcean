import { configureStore } from '@reduxjs/toolkit';
import masters from '../redux/slice/mastersSlice';
import search from '../redux/slice/searchSlice';

export const store = configureStore({
  reducer: { masters, search },
});
