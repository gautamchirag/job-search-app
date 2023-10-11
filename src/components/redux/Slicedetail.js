import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Job: {},
};

export const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    addDetails: (state, action) => {
      state.job = action.payload;
    },
    removeDetail: (state) => {
      state.job = {};
    },
  },
});

export const { addDetails, getDetail } = jobSlice.actions;

export default jobSlice.reducer;
