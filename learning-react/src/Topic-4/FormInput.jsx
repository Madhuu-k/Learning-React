import { useState } from "react";

function FormInput() {
    const [text, setText] = useState("");
    return(
        <>
            <input
               type="text"
               placeholder="Type Something..,"
               value={text}
               onChange={(e) => setText(e.target.value)}          
            />
            <h2>You typed: {text}</h2>
        </>
    );
}

export default FormInput;