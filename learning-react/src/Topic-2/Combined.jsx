function Combined() {
    const name = 'Madhu Sudhan';
    const age = 19;
    const hobbies = ['Learning', "Gaming", "Gym", "Coding"];
    const isAdult = (age > 18);

    return (
        <>
            <h2>User Information</h2>
            <p style={{ color: "Gold", fontWeight: 'bold'}}>Name: {name}</p>
            <p> Age: {age}</p>
            {isAdult  ? (
                <p style={{color:'silver'}}>Is adult</p>
            ):(
                <p style={{ color:'red'}}>Not Adult</p>
            )}
            <h3>Hobbies:</h3>
            <ol style={{color: 'blue'}}>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ol>
        </>
    );
}

export default Combined;