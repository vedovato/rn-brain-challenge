import { configureStore } from '@reduxjs/toolkit';
import counter from '../redux/slice';

const store = configureStore({
  reducer: { counter },
});

export default store;
