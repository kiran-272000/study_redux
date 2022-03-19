import classes from "./Counter.module.css";
import store from "../store";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({ type: "TOOGLE" });
  };

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT", value: 1 });
  };
  const incrementBy5Handler = () => {
    dispatch({ type: "INCREMENT", value: 5 });
  };

  const deccrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={incrementBy5Handler}>INCRESE BY 5</button>
        <button onClick={deccrementHandler}>DECCREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// import React, { Component } from "react";
// import { connect } from "react-redux";
// import classes from "./Counter.module.css";

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
//           <button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const dispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };

// export default connect(mapStateToProps, dispatchToProps)(Counter);
