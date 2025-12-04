import { useState } from "react";
import axios from "axios";

export default function Membership() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [plan, setPlan] = useState("");

  const updateMembership = async () => {
    const res = await axios.post("http://localhost:5000/api/membership/update", {
      userId: user._id,
      plan
    });

    alert("Membership updated!");
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>Membership</h2>

      <select onChange={(e) => setPlan(e.target.value)}>
        <option value="">Select Plan</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>

      <br />
      <button onClick={updateMembership}>Update Membership</button>
    </div>
  );
}
