import Input from "../../components/todo-input";
import TodoItem from "../../components/todo-item";
import { useState } from "react";
import TodoList from "../../components/todo-list";

const Todos = () => {
  return (
    <div className="w-96 mx-auto my-8 rounded-md py-5 px-4 bg-white">
      <Input />
      <TodoList />
    </div>
  );
};

export default Todos;
