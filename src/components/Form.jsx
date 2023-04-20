import { useState } from "react";
export default function Form({ setTodos, todos }) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState("personal");

  function createTodo(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        description: input,
        category: category,
        complete: false,
        id: Date.now(),
      },
    ]);
    setInput("");
  }

  return (
    <form>
      <label
        className="block text-sm font-bold text-gray-500 dark:text-gray-300"
        htmlFor="todo"
      >
        Whats on your todo?
      </label>
      <input
        className="dark:tex-white ease my-2 w-full rounded-md py-2 px-4 shadow-md transition-all duration-700 dark:bg-black dark:text-white dark:placeholder:text-gray-400"
        placeholder="e.g. Get some milk"
        required
        type="text"
        name="todo"
        id="todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <fieldset className="mt-3 flex flex-row items-center justify-between gap-4">
        <legend className="mb-2 text-sm font-bold text-gray-500 dark:text-gray-300">
          Pick a category
        </legend>
        <label
          className=" ease flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all duration-700 dark:bg-black dark:text-white dark:shadow-md dark:shadow-blue-500/50"
          htmlFor="business"
        >
          <input
            type="radio"
            name="category"
            id="business"
            value="business"
            className=" hidden"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <span className="w- shadow-outline  flex h-5 w-5 items-center  justify-center rounded-full border-2 border-solid border-blue-500 shadow-md shadow-blue-500/50 after:block after:h-0 after:w-0 after:rounded-full after:bg-blue-500  after:opacity-0 after:shadow-sm after:shadow-blue-500 after:transition-all after:duration-200 after:ease-in-out"></span>
          <p>Business</p>
        </label>
        <label
          className=" ease flex flex-1 cursor-pointer flex-col items-center justify-center rounded-lg bg-white p-6 shadow-sm transition-all duration-700 dark:bg-black dark:text-white dark:shadow-md dark:shadow-pink-500/50"
          htmlFor="personal"
        >
          <input
            type="radio"
            name="category"
            id="personal"
            value="personal"
            className=" hidden"
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
          <span className="w- shadow-outline  flex h-5 w-5 items-center justify-center rounded-full border-2 border-solid border-pink-500 shadow-md shadow-pink-500/50 after:block after:h-0 after:w-0 after:rounded-full after:bg-pink-500 after:opacity-0 after:shadow-sm after:shadow-pink-500 after:transition-all after:duration-200 after:ease-in-out"></span>
          <p>Personal</p>
        </label>
      </fieldset>
      <button
        onClick={(e) => {
          if (input) createTodo(e);
        }}
        className="my-4 w-full rounded-md bg-pink-400 p-3 text-sm font-bold uppercase text-white transition-all duration-200 hover:bg-pink-700 "
        type="submit"
      >
        add todo
      </button>
    </form>
  );
}
