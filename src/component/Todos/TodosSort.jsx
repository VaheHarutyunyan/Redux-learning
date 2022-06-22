import React from "react";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setFilterSort } from "../../store/actionCreator/filter";

function TodosSort() {
  //   const dispatch = useDispatch();
  //   const { sort } = useParams();
  //   console.log(sort);
  return (
    <div className="links">
      <Link to="all">All</Link>
      <Link to="active">Active</Link>
      <Link to="completed">Completed</Link>
      {/* <button onClick={() => dispatch(setFilterSort("ALL"))}>All</button>
      <button onClick={() => dispatch(setFilterSort("ACTIVE"))}>Active</button>
      <button onClick={() => dispatch(setFilterSort("COMPLETED"))}>
        Completed
      </button> */}
    </div>
  );
}

export default TodosSort;
