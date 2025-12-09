import { useEffect, useState } from "react";

export default function Cleanup() {
    const [tick, setTick] = useState(0);
    
    useEffect(() => {
        console.log("Timer started");

        const timer = setInterval(() => {
            setTick(prev => prev + 1);
        }, 1000)

        return() => {
            console.log("Timer Stopped");
            clearInterval(timer);
        }
    }, []);

    return(
        <>
            <h2>Seconds passed: {tick}</h2>      
        </>
    ); 
};