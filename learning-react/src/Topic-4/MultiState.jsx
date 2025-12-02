import { useState } from "react";

function NameCard(){
    const [name, setName] = useState("Madhu Sudan");
    const[age, setAge] = useState(19);

    return(
        <>
              <p>Name: {name}</p>
              <p>Age: {age}</p>

              <button onClick={() => setAge(age + 1)}>Increase age</button>
              <button onClick={() => setAge(age - 1)}>Decrease Age</button>
        </>
    )
}

export default NameCard;