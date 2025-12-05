import { useState } from "react";

export default function Example() {
    const[email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Email Submitted: " + email);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    );

}