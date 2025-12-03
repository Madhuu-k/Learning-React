import { useState } from "react";

function RemoveButton() {
  const [states, setStates] = useState([
    { id: 1, text: "A", done: false },
    { id: 2, text: "B", done: false },
    { id: 3, text: "C", done: false },
    { id: 4, text: "D", done: false }
  ]);

  const removeState = (valueId) => {
    setStates(prev => prev.filter(item => item.id !== valueId));
  };

  const toggleDone = (id) => {
    setStates(prev =>
      prev.map(item => item.id === id ? { ...item, done: !item.done } : item)
    );
  };

  return (
    <>
      {states.map(item => (
        <div key={item.id} style={{ marginBottom: 8 }}>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => toggleDone(item.id)}
          />
          <span style={{
            marginLeft: 8,
            textDecoration: item.done ? "line-through" : "none"
          }}>
            {item.text}
          </span>

          <button
            style={{ marginLeft: 12 }}
            onClick={() => removeState(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}

export default RemoveButton;
