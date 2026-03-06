import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// define type or interface for state
export interface CounterState {
  value: number
}
// define initial state
const initialState: CounterState = {
  value: 0,
}
// define reducer function
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
    }
})
// export actions
export const { increment, decrement } = counterSlice.actions

// Export the reducer as default export
export default counterSlice.reducer