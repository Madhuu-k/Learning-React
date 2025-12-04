import { useState } from "react";

function Practice1() {
    const [items, setItems] = useState([
        {id: 1, name: "Item 1"},
        {id: 2, name: "Item 2"}
    ]);

    const toggle = (id) => {
        setItems(prev =>
            prev.map(item => 
                item.id === id ? {...item, done: !item.done} : item
            )
        ); 
    };

    return(
        <>
            <h3>Toggle Example</h3>
            {items.map(item =>(
                <div key={item.id}><input
                type="checkbox"
                checked={item.done}
                onChange={() => toggle(item.id)}
                /> {item.name}</div>
            ))}
        </>
    )
}

export default Practice1;