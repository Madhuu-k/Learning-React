function Button({ text, color}) {
    return (
        <button
        style={{
        backgroundColor: color,
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        marginRight: "10px",
        fontSize: "16px",
        cursor: "pointer",
        }}
        onMouseOver={(e) => (e.target.style.opacity = 0.8)}
        onMouseOut={(e) => (e.target.style.opacity = 1)}
        >
            {text}
        </button>
    );
}

export default Button;