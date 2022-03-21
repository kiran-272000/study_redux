import { createStore } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
// import counterReducer from "./counter";
import authSlice from "./auth";
// import authReducer from "./auth";

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
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
    // counter: counterReducer,
    // auth: authReducer,
  },
});

export const counterActions = counterSlice.actions; // while importing only reducer from counter and auth this counteractions and auth actions can be exported from the appropriate slice file
export const authActions = authSlice.actions;

export default store;
