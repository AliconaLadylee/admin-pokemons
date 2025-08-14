import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  isInitialized: boolean;
}

const initialState: CounterState = { value: 5, isInitialized: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initializeCounter(state, action: PayloadAction<number>) {
      if (state.isInitialized) return;
      if (action.payload < 0) action.payload = 0;

      state.value = action.payload;
      state.isInitialized = true;
    },
    increment(state) {
      state.value++;
    },
    decrement(state) {
      if (state.value === 0) return;
      state.value--;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    resetCounter(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, resetCounter, initializeCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
