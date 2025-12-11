import { useState, useEffect } from "react";

export default function SearchFetch() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState(null);

    const handleSearch = async () => {
        if(!search.trim()){
            alert("Erro while fetching");
            return;
        }

        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users?username=${search}`);
            const data = await res.json();
            
            if(data.length == 0) setResult("No");
            else setResult(data[0]);
        } catch(err) {
            console.log(`Error found: ${err}`);
        }
    };

    return (
        <>
            <input
            placeholder="Enter input..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={handleSearch}>Search</button>

            {result === "No" && <p>No match found</p>}

            {result && result != "No" && (
                <div>
                    <p>Match Found: </p>
                    <p>Name: {result.name}</p>
                    <p>Email: {result.email}</p>    
                </div>
            )}
        </>
    )
}