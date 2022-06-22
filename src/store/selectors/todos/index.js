export function getTodos(state) {
  return state.todos;
}

export function getTodosCompleted(state) {
  return {
    completedLength: state.todos.list.filter((item) => item.completed).length,
    todosLength: state.todos.list.length,
  };
}

export function getSortTodos(state, sort) {
  switch (sort) {
    case "all":
      return state.list;
    case "active":
      return state.list.filter((item) => !item.completed);
    case "completed":
      return state.list.filter((item) => item.completed);
    default:
      return state.list;
  }
}
