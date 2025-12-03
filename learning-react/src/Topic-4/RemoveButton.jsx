import { useState } from "react";

function RemoveButton() {
    const[states, setStates] = useState(["A", "B", "C", "D"]);

    const removeState = (value) =>{ setStates(prev => prev.filter(state => state !== value))};
    return(
        <>
            {states.map((state, index) => {
                return <li key={index}>
                    {state}
                    <button onClick={() => removeState(state)}>Remove</button>
                </li>
            })}
        </>
    );
}

export default RemoveButton;