import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (todos, toggleAction) => {
  switch (toggleAction.type) {
    case "COMPLETE":
      return todos.map((todo) => {
        if (todo.id === toggleAction.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return todos;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (item) => {
    dispatch({ type: "COMPLETE", id: item.id });
  };

  return (
    <>
      {todos.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => handleComplete(item)}
            />
            {item.title}
          </label>
        </div>
      ))}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todos />);
