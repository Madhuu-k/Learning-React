import { useState } from "react";

function Arrays() {
    const[characters, setCharacters] = useState(["Micheal", "Franklin", "Trevor"]);

    const addCharacter = () => {
        setCharacters([...characters, "CJ"]);
    };

    const removeCharacter = (name) => {
        setCharacters(prev => prev.filter(character => character !== name))
    };

    return(
        <>
            <button onClick={addCharacter}>Add Item</button>

            <ul>
                {characters.map((character, index) => (
                    <li id={index}>{character}</li>
                ))}
            </ul>

            {characters.map(character => (
                <div key={character}>
                    {character} <button onClick={() => removeCharacter(character)}>Remove Character</button>
                </div>
            ))}
        </>
    );
}

export default Arrays;