import { TodoContext } from "../../context/todo-context";
import { useContext } from "react";

export type Todo = {
  id: string;
  label: string;
  checked: boolean;
};

type Props = Todo;

const TodoItem = ({ id, label, checked }: Props) => {
  const { setTodos } = useContext(TodoContext);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos((t) =>
      t.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: e.target.checked };
        }
        return todo;
      })
    );
  };

  const handleDelete = () => {
    setTodos((t) => t.filter((t) => t.id !== id));
  };

  return (
    <div className="flex items-center my-4">
      <input
        id={`checkbox-${id}`}
        aria-describedby={`helper-checkbox-${id}`}
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
        className="w-4 h-4 rounded me-2"
      />

      <label htmlFor="checkbox" className="w-full flex-1">
        {checked ? <s>{label}</s> : label}
      </label>

      <span
        onClick={handleDelete}
        className="cursor-pointer rounded hover:bg-purple-400"
      >
        ✖
      </span>
    </div>
  );
};

export default TodoItem;
