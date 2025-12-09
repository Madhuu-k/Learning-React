import { useState, useEffect } from "react";

export default function RunOnce() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log("Error: ", err));
    }, []);

    return(
        <>
            <h2>Users List</h2>
            {users.length == 0 && <p>Loading...</p>}
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
}