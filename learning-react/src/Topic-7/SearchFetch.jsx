import { useState, useEffect } from "react";
export default function searchApi() {
    const [search, setSearch] = useState("");
    const [result, setResult] = useState(null);

    useEffect(() => {
        if(!search.trim()){
            setResult(null);
            return;
        }

        const fetchUser = async () => {
            try{
                const res = await fetch(`https://jsonplaceholder.typicode.com/users?username=${search}`);
                const data = await res.json();
                setResult(data[0]);
            } catch(err) {
                console.log("Error fetching: ", err);
            }
        };
        
        fetchUser();
    }, [search]);

    return (
        <>
            <h2>Search by usernaame: </h2>

            <input 
            input="text"
            placeholder="search username"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            {result ? (
                <div style={{ marginTop: 10}}>
                    <h4>Match Found: </h4>
                    <p>Name: {result.name}</p>
                    <p>Email: {result.email}</p>
                </div>
            ) : search ? (
                <p>No Match</p>
            ) : null}
        </>
    );
}