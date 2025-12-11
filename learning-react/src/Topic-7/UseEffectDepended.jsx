import { useEffect, useState } from "react";

export default function Dependency() {
    const [search, setSearch] = useState("");

    useEffect(() => {
        console.log("Searched: ", search);
    }, [search]);

    return(
        <>
            <h2>Search: </h2>
            <input
            type="text"
            placeholder="Search for something"
            onChange={(e) => setSearch(e.target.value)}
            />
        </>
    );
}