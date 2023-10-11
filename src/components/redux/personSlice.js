import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  class12Percentage: '',
  tenPercentage: '',
  currentEducation: '',
  cgpa: '',
  graduationCompletionDate: '',
  resume: '',
};

const personSlice = createSlice({
  name: 'person',
  initialState,
  reducers: {
    addPerson: (state, action) => {
      // Update the properties directly
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.class12Percentage = action.payload.class12Percentage;
      state.tenPercentage = action.payload.tenPercentage;
      state.currentEducation = action.payload.currentEducation;
      state.cgpa = action.payload.cgpa;
      state.graduationCompletionDate = action.payload.graduationCompletionDate;
      state.resume = action.payload.resume;
    },
    removePerson: (state) => {
      // Reset all properties to initial values
      state.name = initialState.name;
      state.email = initialState.email;
      state.phone = initialState.phone;
      state.class12Percentage = initialState.class12Percentage;
      state.tenPercentage = initialState.tenPercentage;
      state.currentEducation = initialState.currentEducation;
      state.cgpa = initialState.cgpa;
      state.graduationCompletionDate = initialState.graduationCompletionDate;
      state.resume = initialState.resume;
    },
  },
});

export const { addPerson, removePerson } = personSlice.actions;
export default personSlice.reducer;
