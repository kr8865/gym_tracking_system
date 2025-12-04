import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/signup", {
      name,
      email,
      password
    });

    alert(res.data.message);
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Signup</h2>

      <input placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br />

      <button onClick={signupUser}>Signup</button>
    </div>
  );
}

