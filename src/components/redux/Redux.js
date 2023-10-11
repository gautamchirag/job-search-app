import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slice.js';
import jobReducer from './Slicedetail.js';
import personReducer from './personSlice.js';
const store = configureStore({
  reducer: {
    auth: authReducer,
    job: jobReducer,
    person: personReducer,
  },
});

export default store;
