function ArrayOperations() {
    const Charecters = ['Ned Stark', 'Jon Snow', 'Arya Stark', 'Sansa Stark', 'Tyrion Lannister'];
    return (
        <>
            <h2>Array Operations in React</h2>
            <ul>
                {Charecters.map((charecter, index) => (
                    <li key={index}>{charecter}</li>
                ))}
            </ul>
        </>
    );
}

export default ArrayOperations;