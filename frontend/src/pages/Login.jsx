import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password
    });

    if (res.data.token) {
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/membership");
    } else {
      alert(res.data.error);
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Login</h2>

      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br />
      <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} /><br />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don’t have an account? <a href="/signup">Signup</a>
      </p>
    </div>
  );
}
