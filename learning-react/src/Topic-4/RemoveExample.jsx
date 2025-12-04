import { useState } from "react";

function RemoveExample() {
    const [titles, setTitles] = useState([
        {id: 1, name: "WWE Title"},
        {id: 2, name: "Universal Title"},
        {id: 3, name: "Intercontinental Title"},
        {id: 4, name: "US Title"},
    ]);

    const removeTitle = (id) => {
        setTitles(prev => prev.filter(title => title.id !== id));
    }

    return(
        <>
            <h3>Remove Example</h3>
            {titles.map(title => (
                <div key={title.id}>
                    {title.name} <button onClick={() => removeTitle(title.id)}>Remove</button>
                </div>
            ))}
        </>
    );
}

export default RemoveExample;