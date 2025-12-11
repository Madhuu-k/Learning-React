import { useState, useEffect } from "react";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if(!search.trim()) {
            alert("Error while fetching - enter a username to search");
            return;
        }

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users?username=${search}`);
            const data = await res.json()

            if(data.length == 0) setResult("None");
            else setResult(data[0]);
        } catch(err) {
            console.log(`Error found: ${err}`)
        } finally {
            setLoading(false);
        }
    }; 

    const clear = () => {
        setSearch("");
        setResult(null);
    }

    return(
        <>
            <input 
            type="text"
            placeholder="Search via username"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={handleSearch}>Search</button>

            {result === "None" && <p>No Match Found</p>}
            {result && result != "None" && (
                <div>
                    <h2>Match Found: </h2>
                    <p>Name: {result.name}</p>
                    <p>Email address: {result.email}</p>
                    <p>Id Number: {result.id}</p>
                </div>
            )}
            <button onClick={clear}>Clear Search Result</button>
        </>
    )
}