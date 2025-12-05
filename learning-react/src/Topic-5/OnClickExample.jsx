import { useState } from "react";

export default function Example() {
    const [count, setCount ] = useState(0);
    
    return(
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <button onClick={() => setCount(count - 1)}>Decrease Count</button>
        </>
    );
}