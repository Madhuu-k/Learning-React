function BasicJSX() {
    const name = 'Daemon Targaryen';
    const swordName = 'Dark Sister';
    const age = 25;

    return (
        <>
            <h2>Charectre Details</h2>
            <p style={{fontWeight:'bold', color:'Red'}}>Name: {name}</p>
            <p style={{color:'gold', fontWeight: 'bold'}}>Sword Name: {swordName}</p>
            {age >= 18 ? (
                <p style={{color: 'Black'}}>Rider of Caraxes</p>
            ) : (
                <p style={{ color:'blue'}}>Still to take a dragon</p>
            )}
        </>
    );
}

export default BasicJSX;