import React, { useState } from "react";
import "./TodoList.css";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(["Todo1", "Todo2", "todo3", "todo4"]);

  function handleInput(e) {
    setInputText(e.target.value);
    console.log(inputText);
  }

  return (
    <div className="todolist">
      <h1 className="headline">My Todo List</h1>
      <ul>
        {todos.map((todo) => {
          return <TodoListItem text={todo} />;
        })}
      </ul>
      <input onChange={handleInput}></input>
      <button>Create</button>
      <button>Cancel</button>
    </div>
  );
}

export default TodoList;
