import { useState } from "react";

export default function Example() {
    const [names, setNames] = useState("");
    const [list, setList] = useState([]);

    const addName = () => {
        setList(prev => [...prev, names]);
        setNames("");
    };

    const removeName = (Removeindex) => {
        setList(prev => prev.filter((item, index) => index !== Removeindex))
    };

    return(
        <>
            <h2>Add to list example: </h2>
            <input 
            type="text"
            placeholder="Enter name..."
            onChange={(e) => setNames(e.target.value)}
            value={names}
            />

            <button onClick={addName}>Add</button>

            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item} <button onClick={() => removeName(index)}>Remove Name</button>  </li>
                ))}
            </ul>
        </>
    )
}