import { configureStore } from '@reduxjs/toolkit';
import countersReducer from '../redux/slice';

const store = configureStore({
  reducer: {
    counters: countersReducer,
  },
});

export default store;
