import { useState } from "react";

function UserProfile() {
    const[user, setUser] = useState({
        name: "Madhu sudhan",
        age: 19,
        profession: "Student"
    })

    return(
        <>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Profession: {user.profession}</h2>

            <input type="text" placeholder="Change Name" value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value})}
            />

            <input type="number" placeholder="Change Age" value={user.age}
                onChange={(e) => setUser({ ...user, age: Number(e.target.value)})} />

            <input type="text" placeholder="Change Profession" value={user.profession}
                onChange={(e) => setUser({...user, profession: e.target.value})} />
        </>
    );
}

export default UserProfile;