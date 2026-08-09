import { useState } from "react";

type Todo = {
  id?: number;
  title: string;
  completed?: boolean;
};

function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");

  const todosCount = todos.length - 1;

  //add todo
  const addTodo = () => {
    if (title.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTitle("");
  };

  //delete todo
  const deleteTodo = (id: number | undefined) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  //toggle todo
  const toggleTodo = (id: number | undefined) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  return (
    <div className="ring rounded p-5 h-full overflow-y-scroll relative">
      <div className="sticky bg-black  top-0">
        <h1 className="text-2xl font-bold mb-5">Todo App</h1>
        <p className="absolute top-5 right-5">Todo Count: {todosCount}</p>
        {/* input  */}
        <input
          type="text"
          placeholder="Add Todo here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="ring p-2 rounded "
        />
        <button onClick={addTodo} className="ring px-4 py-2 rounded ml-5">
          Add Todo
        </button>
      </div>

      {/* Todo List  */}
      <ul className="border-t mt-5 py-5 ">
        {todos.map((todo) => (
          <li key={todo.id} className="border-b py-2">
            <span
              className="italic font-semibold text-[14px]"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </span>
            <button
              onClick={() => toggleTodo(todo.id)}
              className="ring px-4 py-2 rounded ml-5"
            >
              {todo.completed ? "undo" : "completed"}
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="ring px-4 py-2 rounded ml-5"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
