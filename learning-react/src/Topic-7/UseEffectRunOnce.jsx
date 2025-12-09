import { useEffect} from "react";

export default function UseOnce() {
    useEffect(() => {
        console.log("Component Loaded");
    }, []);

    return(
        <>
            <h3>Component Loaded</h3>
        </>
    );
}