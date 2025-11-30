function MathOperations() {
    const a = 10;
    const b = 7;

    return (
        <>
            <h2>Math Operations</h2>
            <p>Sum: {a + b}</p>
            <p>Difference: {a - b}</p>
            {a > b ? (
                <p>{a + " is greater than " + b}</p>
            ):(
                <p>{b + " is greater than " + a}</p>
            )}
        </>
    )
}

export default MathOperations;