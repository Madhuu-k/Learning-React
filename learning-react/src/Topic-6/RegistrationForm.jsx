import { useState } from "react";

export default function Registrationform() {
    const [form, setForm] = useState({
        username: "",
        email : "",
        age : ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`
            Username: ${form.username}
            Email: ${form.email}
            Age: ${form.age}        
        `)
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    }

    return (
        <>
            <h2>Registration Form: </h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Enter Username"
                name="username"
                value={form.username}
                onChange={handleChange}
                />
                <br/>
                <input
                type="email"
                placeholder="Enter Email ID"
                name="email"
                value={form.email}
                onChange={handleChange}
                />
                <br/>
                <input
                type="number"
                placeholder="Enter Age"
                name="age"
                value={form.age}
                onChange={handleChange}
                />
                <br/>
                <button onSubmit={handleSubmit}>Submit Registration</button>
            </form>
        </>
    )
};

