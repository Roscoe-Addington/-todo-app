import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Lära useState",
    "Se re-render",
    "Ta helg kl 16",
  ]);
  const [draft, setDraft] = useState("");

  function handleChange(e) {
    setDraft(e.target.value);
  }

  function handleAdd() {
    const text = draft.trim();
    if (text === "") return;
    setTodos([...todos, text]);
    setDraft("");
  }

  function handleRemove(textToRemove) {
    const kvar = todos.filter(function (todo) {
      return todo !== textToRemove;
    });
    setTodos(kvar);
  }

  return (
    <main>
      <h1>Todo-lista</h1>
      <input value={draft} onChange={handleChange} />
      <button type="button" onClick={handleAdd}>
        Lägg till
      </button>
      <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo}>
              {todo}{" "}
              <button
                type="button"
                onClick={function () {
                  handleRemove(todo);
                }}
              >
                Ta bort
              </button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default App;
