import { createRoot } from "react-dom/client";
import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // useEffect renders
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    saveLocalTodos();
  }, [todos]);

  // local storage
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className={`app ${darkMode ? "dark" : ""} `}>
      <main className="ease mx-auto mt-10 h-fit max-w-[500px] rounded-xl border-2 bg-gray-100 px-4 py-8 shadow-md transition-all duration-700 dark:bg-black/80">
        <div className="flex flex-row flex-nowrap items-center justify-between">
          <h1 className="mb-4 text-2xl font-bold dark:text-white">
            What,s up, <span>Mario!</span>
          </h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            <FontAwesomeIcon
              icon={!darkMode ? faMoon : faSun}
              className="ease h-6 w-6 rounded-full bg-white p-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl dark:bg-black dark:text-white"
            />
          </button>
        </div>
        <h2 className="text-sm uppercase tracking-wide text-gray-500 dark:text-white">
          create a todo
        </h2>
        <Form setTodos={setTodos} todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </main>
    </div>
  );
}

// render in html
let container = null;
document.addEventListener("DOMContentLoaded", function () {
  if (!container) {
    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<App />);
  }
});
