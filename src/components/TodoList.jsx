import Todo from "./Todo";

export default function TodoList({ todos, setTodos }) {
  return (
    <div>
      <h2 className="mb-2 text-sm uppercase text-gray-500">todo list</h2>
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => {
          return (
            <Todo todo={todo} key={todo.id} setTodos={setTodos} todos={todos} />
          );
        })}
      </ul>
    </div>
  );
}
