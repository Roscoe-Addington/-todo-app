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
    const nyaTodos = todos.filter(function (todo) {
      return todo !== textToRemove;
    });
    setTodos(nyaTodos);
  }

  return (
    <main>
      <h1>Min Todo-app</h1>
      <p>Antal uppgifter: {todos.length}</p>
      <input
        type="text"
        value={draft}
        onChange={handleChange}
        placeholder="Ny uppgift"
      />
      <button type="button" onClick={handleAdd}>
        Lägg till
      </button>
      <ul>
        {todos.map(function (todo) {
          return (
            <li key={todo}>
              {todo}
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
