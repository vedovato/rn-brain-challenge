import { createSlice } from '@reduxjs/toolkit';
import { showToast } from '../utils/navigation';

export const counterSlice = createSlice({
  name: 'counters',

  initialState: {
    selected: null,
    counters: [],
  },

  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    },

    createCounter: (state) => {
      const len = state.counters.length;
      state.selected = len;
      state.counters.push({ value: 0 });
      showToast({ type: 'add' });
    },

    deleteCounter: (state) => {
      if (state.selected !== null) {
        state.selected = null;
        state.counters.splice(state.selected, 1);
        showToast({ type: 'delete' });
      }
    },

    increment: (state) => {
      const match = state.counters[state.selected];
      match ? (match.value += 1) : false;
      showToast({ type: 'increment' });
    },

    decrement: (state) => {
      const match = state.counters[state.selected];
      if (match && match.value > 0) {
        showToast({ type: 'decrement' });
        match.value -= 1;
      }
    },

    reset: (state) => {
      const match = state.counters[state.selected];
      match ? (match.value = 0) : false;
      showToast({ type: 'reset' });
    },
  },
});

export const {
  setSelected,
  createCounter,
  deleteCounter,
  increment,
  decrement,
  reset,
} = counterSlice.actions;

export default counterSlice.reducer;
