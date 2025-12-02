import { useState } from "react";

function ArrayState() {
    const[items, setItems] = useState(["Bread", "Milk", "Water"]);
    const addItem = () => {
        setItems([ ...items, "Eggs"]);
    };

    return(
        <>
            <button onClick={addItem}>Add Item</button>

            <ul>
                {items.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ArrayState;