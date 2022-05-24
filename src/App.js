import React, { useState } from "react";
import FormTodo from "./Modules/formTodo";
import TodoList from "./Modules/todoList";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([
    {
      taskName: "This is my first task",
      isTaskDone: false,
    },
  ]);

  const markTodo = (index) => {
    const newtodos = [...todos];
    newtodos[index].isTaskDone = true;
    setTodos(newtodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const addHandler = (taskName) => {
    console.log(...todos);
    const newTodo = [...todos, { taskName }];
    setTodos(newTodo);
  };


  return (
    <div className="container">
      <h1 style= {{textAlign: "center"}}>Todo List</h1>
      <FormTodo addTodo={addHandler} />
      <TodoList markTodo={markTodo} removeTodo={removeTodo} todos={todos} />
    </div>
  );
};

export default App;
