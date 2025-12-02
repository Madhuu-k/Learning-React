import { useState } from "react";

function ObjectState() {
    const [user, setUser] = useState({
        name: "Madhu Sudan",
        age: 19,
        profession: "Student"
    });

    return(
        <>
            <h3>Name: {user.name}</h3>
            <h3>Age: {user.age}</h3>
            <button onClick={() => setUser({ ...user, age: user.age + 1})}>Birthday + 1</button>
            <button onClick={() => setUser({ ...user, age: user.age - 1})}>Birthday - 1</button>
        </>
    );
}

export default ObjectState;