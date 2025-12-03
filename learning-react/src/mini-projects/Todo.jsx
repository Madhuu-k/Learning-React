import { useState } from "react";

function Todo() {
    const[tasks, setTaks] = useState([]);
    const[text, setText] = useState("");

    const addTask = (newTask) => {
        newTask = {
            id: Date.now(),
            finished: false,
            text: text.trim()
        };

        setTaks(prev => [...prev, newTask])
        setText("");
    }


    return(
        <>
            <h2>Todo App:</h2>

            <input
            type="text"
            placeholder="Enter a task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            />

            <button onClick={addTask}>Add Task</button>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.text} <button onClick={() => setTaks(prev => prev.filter(t => t.id !== task.id))}>Remove Task</button> </li>
                    
                ))}
            </ul>
        </>
    );
}

export default Todo;