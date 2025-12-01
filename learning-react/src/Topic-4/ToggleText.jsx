import { useState } from "react";

function ToggleText() {
    const[show, showText] = useState(true);
    return(
        <>
            <button 
            onClick={() => showText(!show)}
            style={{backgroundColor: "gold", color: "black", padding: 10}}>Toggle</button>

            {show && <p>This text appears and disappears!</p>}
        </>
    );
}

export default ToggleText;