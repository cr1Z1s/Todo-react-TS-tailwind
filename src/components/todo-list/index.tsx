import { useContext } from "react";
import { TodoContext } from "../../context/todo-context";
import TodoItem, { Todo } from "../todo-item";

type Props = {
  todos: Todo[];
};

const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
