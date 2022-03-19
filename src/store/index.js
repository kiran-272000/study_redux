import { createStore } from "redux";

import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },

    decrement(state) {
      state.counter--;
    },

    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...state, counter: state.counter + action.value };
//   }
//   if (action.type === "DECREMENT") {
//     return { ...state, counter: state.counter - 1 };
//   }
//   if (action.type === "TOOGLE") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default store;
