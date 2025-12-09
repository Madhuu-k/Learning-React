import { useState, useEffect } from "react";

export default function Async() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        const loadUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await res.join();
                setUser(data);                
            } catch(err) {console.log("Error: ", err);
            }
        };
        loadUsers();
    }, [])

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
};