import { useEffect, useState } from "react";

export default function WhenChanges() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count Changed: ", count);
    }, [count]);

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
        </>
    );
}