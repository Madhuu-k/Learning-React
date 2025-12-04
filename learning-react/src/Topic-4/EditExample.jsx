import { useState } from "react";

export default function EditExample() {
    const [names, setNames] = useState([
        {id: 1, name: "Aegon-1"},
        {id: 2, name: "Enys-1"},
        {id: 3, name: "Meagor-1"},
        {id: 4, name: "Jaehaerys-1"}
    ]);

    const EditName = (id, newName) => {
        setNames(prev => prev.map(item => item.id === id ? {...item, name: newName} : item))
    }

    return(
        <>
            <h3>Edit Example</h3>
            {names.map(item => (
                <div key={item.id}> {item.name}
                    <input 
                    type="text"
                    placeholder="type something..."
                    onChange={(e) => EditName(item.id, e.target.value)}
                    />
                </div>
            ))}
        </>
    );
}