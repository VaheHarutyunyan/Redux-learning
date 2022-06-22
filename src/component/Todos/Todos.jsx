import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { setFilterSort } from "../../store/actionCreator/filter";
import {
  addTodo,
  clearCompletedTodo,
  completedTodo,
  deleteTodo,
  filteredTodo,
} from "../../store/actionCreator/todos";
// import { getSort } from "../../store/selectors/filter";
import {
  getSortTodos,
  getTodos,
  getTodosCompleted,
} from "../../store/selectors/todos";
import TodosSort from "./TodosSort";

const Todos = () => {
  const { filter } = useSelector(getTodos);
  // const sort = useSelector(getSort);
  const { sort } = useParams();
  console.log(sort);
  const sortTodos = useSelector((state) => getSortTodos(state.todos, sort));

  const dispatch = useDispatch();
  const inputRef = useRef();
  const { completedLength, todosLength } = useSelector(getTodosCompleted);

  return (
    <div>
      <div>
        <input
          type="text"
          value={filter}
          onChange={(e) =>
            dispatch(filteredTodo({ filterValue: e.target.value }))
          }
        />
      </div>
      <div>
        <TodosSort />
        {/* <button onClick={() => dispatch(setFilterSort("ALL"))}>All</button>
        <button onClick={() => dispatch(setFilterSort("ACTIVE"))}>
          Active
        </button>
        <button onClick={() => dispatch(setFilterSort("COMPLETED"))}>
          Completed
        </button> */}
      </div>
      <form
        onSubmit={(e) => {
          dispatch(addTodo({ title: inputRef.current.value }));
          e.preventDefault();
          e.target.reset();
        }}
      >
        <input type="text" defaultValue={""} ref={inputRef} />
        <button type="submit">ADD</button>
      </form>
      <ul>
        {sortTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => {
                dispatch(completedTodo({ id: todo.id }));
              }}
            />
            <span>{todo.title}</span>
            <button
              onClick={() => {
                dispatch(deleteTodo({ id: todo.id }));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div>
        <span>
          {completedLength} / {todosLength} Completed
        </span>
        <button
          onClick={() => {
            dispatch(clearCompletedTodo());
          }}
        >
          Reset Completed
        </button>
      </div>
    </div>
  );
};

export default Todos;
