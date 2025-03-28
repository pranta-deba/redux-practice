import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: { count: number } = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
    incrementByValueFromObject: (
      state,
      action: PayloadAction<{ value: number }>
    ) => {
      state.count += action.payload.value;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByValue,
  incrementByValueFromObject,
} = counterSlice.actions;
export default counterSlice.reducer;
