import { useState } from "react";

export default function Todo({ todo, setTodos, todos }) {
  // states
  const [done, setDone] = useState(todo.complete);
  const [edit, setEdit] = useState(todo.description);
  const [readonly, setReadOnly] = useState(true);
  const color = todo.category === "business" ? "blue" : "pink";

  // functions
  const removeTodo = function () {
    setTodos(() => todos.filter((delTodo) => delTodo.id !== todo.id));
  };

  const editTodo = function () {
    // enable editing
    setReadOnly(false);
    const inputElement = document.getElementById(`todoInput${todo.id}`);
    inputElement.focus();

    // clicking outside input
    inputElement.addEventListener("blur", () => {
      setReadOnly(true);
      todo.description = inputElement.value;
      setTodos(() => todos.map((todo) => todo));
    });
  };

  const completeTodo = function () {
    todo.complete = !todo.complete;
    console.log("todo modified", todo);
    setTodos(() => todos.map((todo) => todo));
  };

  // markup
  return (
    <li className=" ease  group flex flex-row flex-nowrap items-center gap-3 rounded-lg bg-white p-4 shadow-md transition-all duration-700 dark:bg-black  ">
      <label htmlFor={todo.id}>
        <input
          onChange={(e) => {
            setDone(e.target.checked);
            completeTodo();
          }}
          className="hidden"
          type="checkbox"
          name="checked"
          id={todo.id}
          checked={done}
        />
        <span
          className={`w- shadow-outline flex h-5 w-5 items-center justify-center rounded-full border-2 border-solid border-${color}-500 shadow-md shadow-${color}-500/50 after:block after:h-0 after:w-0 after:rounded-full after:bg-${color}-500 after:opacity-0 after:shadow-sm after:shadow-${color}-500 after:transition-all after:duration-200 after:ease-in-out`}
        ></span>
      </label>
      <input
        className={`ease w-full shrink grow basis-0 transition-all duration-700 focus:outline-none dark:bg-black  dark:text-white ${
          done === true
            ? "text-gray-500 line-through dark:text-gray-300/50"
            : ""
        }`}
        type="text"
        value={edit}
        readOnly={readonly}
        onChange={(e) => {
          setEdit(e.target.value);
        }}
        id={`todoInput${todo.id}`}
      />
      <div className="flex flex-row gap-2">
        <button
          onClick={() => editTodo()}
          className="ease rounded-sm bg-pink-500/80 py-1 px-3 text-white shadow-md transition-all duration-200 hover:bg-pink-500/100"
        >
          Edit
        </button>
        <button
          onClick={removeTodo}
          className="ease rounded-sm bg-red-500/80 py-1 px-3 text-white shadow-md transition-all duration-200 hover:bg-red-500/100"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
