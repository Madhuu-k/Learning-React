import { useState } from "react";

export default function LiveSearch() {
    const [names, setNames] = useState([
        "Aegon", "Visenya", "Rhaeneys", "Maegor", "Enys", "Viserys"
    ]);

    const [search, setSearch] = useState("");
    const [newName, setNewName] = useState("");

    const filteredNames = names.filter(name =>
        name.toLowerCase().startsWith(search.toLowerCase())
    );

    const lastName = " Targaryen"
     
    const addName = () =>{
        if(!newName.trim()) return;
        const fullName = newName + lastName;
        setNames(prev => [...prev, fullName]);
        setNewName();
    }

    return(
        <div 
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "40px",
      gap: "20px",
      marginLeft: "250px"
    }}>
            <h2>Live Search Exampe:</h2>
            
            <input
            type="text"
            placeholder="Search for something..."
            value={search}
            onChange = {(e) => setSearch(e.target.value)}
            style={{ padding: "8px", width: "250px", marginTop: "-25px" }}
            />

            {search && (
                <ul>
                    {filteredNames.map((item, index) => (
                        <li key={index} onClick = {() => setSearch(item)}>{item}</li>
                    ))}
                </ul>
            )}

            <h2>Add New Name: </h2>
            <input
            type="text"
            placeholder="Add new name"
            value={newName}
            onChange = {(e) => setNewName(e.target.value)}
            style={{ padding: "8px", width: "250px", marginTop: "-30px" }}
            />
            <button onClick={addName} >Add</button>
        </div>
    );
}