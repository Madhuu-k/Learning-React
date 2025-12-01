import { useState } from "react";

function TextChange() {
    const[text, setText] = useState("");

    return(
    <>
        <input
            type="text"
            placeholder="Type Somethin lil bro..."
            onChange={(e) => setText(e.target.value)}
        />
            
        <h3>You Typed: {text}</h3>
    </>
    )
}
 

export default TextChange;