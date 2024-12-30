import { configureStore } from '@reduxjs/toolkit';
import counterReducer  from "./primerSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    },
  
});

export default store;