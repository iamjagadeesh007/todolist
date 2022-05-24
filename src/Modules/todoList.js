import React from "react";
//import Card from "./Card";
// import FormTodo from "./formTodo";
import './todoList.css'

const TodoList = ({ todos, markTodo, removeTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <div className="todo">
            <span
              style={{ textDecoration: todo.isTaskDone ? "line-through" : "" }}
            >
              {todo.taskName}
            </span>
            <div>
            <button onClick={() => markTodo(index)} className="btn_done" disabled={todo.isTaskDone}>✓</button>
            {"  "}
            <button onClick={() => removeTodo(index)} className="btn_danger">✕</button>

            </div>

            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TodoList;
