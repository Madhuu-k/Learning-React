import { useState } from "react";

function AddExample() {
    const [items, setItems] = useState(["Apple", "Banana"]);

    const addItem = (newItem) => {
        setItems(prev => [...prev, newItem]);
    }
    
    const removeItem = (item) => {
        setItems(prev => prev.filter(it => it !== item))
    }

    return (
        <>
            <button onClick={() => addItem("Orange")}>Add Oranges</button>
            <ul>
                {items.map((item, index) =>{
                    return <li key={index}>{item}</li>
                })}
            </ul>

            {items.map(it => (
                <div key={it}>
                    {it} <button onClick={() => removeItem(it)}>Remove</button>
                </div>
            ))}
        </>
    );
}

export default AddExample;