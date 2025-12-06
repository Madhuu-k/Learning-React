import { useState } from "react";

export default function Login() {
    const[email, setEmail] = useState("");
    const[pass, setPass] = useState("");

    const handleForm = (e) => {
        e.PreventDefault();
        alert(`Email: ${email}\nPassword: ${pass}`)
        };

    return(
        <>
            <h2>Login</h2>
            <form>
                    <input 
                    type="text"
                    placeholder="Enter email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                    type="password"
                    placeholder="Enter password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    />
                    <button onClick={handleForm}>Login</button>
            </form>
        </>
     );
    
}