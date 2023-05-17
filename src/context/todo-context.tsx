import { FC, PropsWithChildren, createContext, useState } from "react";

import { Todo } from "../components/todo-item";

type ContextValues = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoProvider: FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: "11", label: "hello world 1", checked: false },
    { id: "22", label: "hello world 2", checked: false },
    { id: "33", label: "hello world 3", checked: false },
    { id: "44", label: "hello world 4", checked: true },
  ]);

  const contextValues = { todos, setTodos };

  return (
    <TodoContext.Provider value={contextValues}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;

export const TodoContext = createContext<ContextValues>({} as ContextValues);
