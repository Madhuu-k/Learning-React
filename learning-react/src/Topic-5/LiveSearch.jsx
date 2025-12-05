import { useState } from "react";

export default function LiveSearch() {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([
        "Punk", "Rollins", "Reigns", "Mysterio", "Cena", "Lesnar", "Orton", "Bryan"
    ])

    const [newName, setNewName] = useState("");

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    const AddToList = () => {
        setItems(prev => [...prev, newName]);
        setNewName("");
    };

    return(
        <>
            <h2>Live Search: </h2>
            <input
            type="text"
            placeholder="type something..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />

            {search && 
            (<ul>
                {filteredItems.map((item, index) => (
                    <li key={index} onClick={() => setSearch(item)}>{item}</li>
                ))}
            </ul>)}
             <br /> <br />
            <input
            type="text"
            placeholder="Add To List"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            />
            <button onClick={AddToList}>Add To List</button>
        </>
    );
}