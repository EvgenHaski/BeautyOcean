import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMasters = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { search } = params;
  const { data } = await axios.get(`https://64302e6db289b1dec4c321df.mockapi.io/masters?${search}`);
  return data;
});

const initialState = {
  searchValue: '',
  masters: [],
  status: 'loading', //loading, success, error
};

export const mastersSlice = createSlice({
  name: 'masters',
  initialState,
  reducers: {
    setMasters(state, action) {
      state.masters = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
  extraReducers: {
    [fetchMasters.pending]: (state) => {
      state.status = 'loading';
      state.masters = [];
    },
    [fetchMasters.fulfilled]: (state, action) => {
      state.masters = action.payload;
      state.status = 'success';
    },
    [fetchMasters.rejected]: (state, action) => {
      state.status = 'error';
      state.masters = [];
    },
  },
});

export const { setMasters, setSearchValue } = mastersSlice.actions;

export default mastersSlice.reducer;
