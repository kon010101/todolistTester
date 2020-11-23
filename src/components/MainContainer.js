import React from "react";
import "./MainContainer.css";
import TodoList from "./TodoList";

function MainContainer() {
  return (
    <div className="maincontainer">
      <h1>Hello from MainContainer</h1>
      <TodoList />
      <TodoList />
    </div>
  );
}

export default MainContainer;
