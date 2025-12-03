import { useState } from 'react';

function InputChange() {
    const[users, setUsers] = useState([[
        {name: "Daemon", age: 22},
        {name: "Jon", age: 21},
        {name: "Tyrion", age: 20},
        {name: "Robert", age: 30}
    ]]);

    return(
        <>
            {users[0].map((user, index) => (
                <div key={index}>
                    <h2>Name: {user.name} </h2>
                    <h2>Age: {user.age}</h2>
                </div>
            ))}
        </>
    );
}

export default InputChange;