import { useState } from "react";

export default function Example() {
    const [text, setText ] = useState("");

    return(
        <>
            <h2>On Change Example: {text} </h2>
            <input
            type="text"
            placeholder="Type something..."
            onChange={(e) => setText(e.target.value)}
            value={text}
            />

        </>
    )
}