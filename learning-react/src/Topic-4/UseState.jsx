import { useState } from "react";

function Counter() {
    const[count, setCount] = useState(0);
    
    return(
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)} style={{padding: 10, backgroundColor: "green"}}>+</button>
            <button onClick={() => setCount(count - 1)} style={{padding: 10, backgroundColor: "lightblue"}}>-</button>
        </>
    );
}

export default Counter;