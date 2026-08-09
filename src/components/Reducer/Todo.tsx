
import { useReducer, useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "TOGGLE_TODO"; payload: number };

function reducer(state: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
  }
}

function Todo() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [input, setInput] = useState("");

  function handleAddTodo() {
    if (input.trim() === "") return;

    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  }
  return (
    <div>
      <h1>Todo App</h1>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter todo" />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo)=>(<li key={todo.id}>
            <span onClick={()=>dispatch({type: "TOGGLE_TODO",payload: todo.id})} style={{textDecoration: todo.completed? "line-through": "none", cursor: "pointer"}}>
                {todo.text}
                <button onClick={()=>dispatch({type: "DELETE_TODO", payload: todo.id})}>Delete</button>
            </span>
        </li>))}
      </ul>
    </div>
  );
}

export default Todo;
