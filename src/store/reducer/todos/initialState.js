const initialState = {
  list: [
    { id: Math.random(), title: "html", completed: true },
    { id: Math.random(), title: "css", completed: false },
    { id: Math.random(), title: "js", completed: false },
    { id: Math.random(), title: "react", completed: false },
    { id: Math.random(), title: "redux", completed: false },
  ],
  filter: "",
};

export default initialState;
