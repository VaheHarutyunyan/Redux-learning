import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../store/actionCreator/counter";
import { getCount } from "../../store/selectors/counter";

export default function Counter() {
  const counter = useSelector(getCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>{counter}</h4>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
    </div>
  );
}
