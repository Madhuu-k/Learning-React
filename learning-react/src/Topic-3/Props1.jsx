function UserCard({ name, age, charecters }){
    return (
        <div style={{ padding: 10, background: "#222", marginBottom: 10, borderRadius: 8 }}>
            <h2 style={{ color: "gold" }}>{name}</h2>
            <h3>Age: {age}</h3>
            <h4>Charecters: 
                <ul>
                    {charecters.map((charecter, index) => (
                        <li key={index}>{charecter} </li>
                    ))}
                </ul>
            </h4>
        </div>
    )
}

export default UserCard;