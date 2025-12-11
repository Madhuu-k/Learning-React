import { useEffect, useState } from "react";

export default function FetchLoader() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const load = async () => {
            try {
                setLoading(true);
                setError("");
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!res.ok) throw new Error("Failed to fetch data");
                const data = await res.json();
                setUser(data);
            } catch(err) {
                setError("Failed to load user");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        load();
    }, []);

    if (loading) return <p>Loading Users...</p>
    if(error) return <p>Error fetching results...</p>

    return(
        <>
            <h3>Users: </h3>
            <ol>
                {user.map(u => (
                    <li key={u.id}>{u.name}  ({u.email})</li>
                ))}
            </ol>
        </>
    );
}