import { useState } from "react";

function AddButton() {
    const[fruits, setFruits] = useState(["Apple", "Banana"]);

    return (
        <>
            {fruits.map((fruit, index) => {
                return <li key={index}>{fruit}</li>
            })}

            <button onClick={() => setFruits(prev => [...prev, "Oranges"])}>Add Fruit</button>
        </>
    )
}

export default AddButton;