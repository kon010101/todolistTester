import React from "react";
import "./TodoListItem.css";

function TodoListItem({ text }) {
  return (
    <div className="todolist-item">
      <span>{text}</span>
      <button>Check</button>
      <button>Delete</button>
    </div>
  );
}

export default TodoListItem;
