import { useState } from "react";

export default function AddExample() {
    const [charecters, setCharecters] = useState(["Micheal", "Franklin", "Trevor"]);

    const addCharacter = () => {
        setCharecters([...charecters, "Lamar" ])
    }

    return(
        <>
            <h3>Add Example</h3>
            {charecters.map((charecter, index) => (
                <div key={index}>{charecter}</div>
            ))}
            <button onClick={() => addCharacter()}>Add Lamar</button>
        </>
    );
}