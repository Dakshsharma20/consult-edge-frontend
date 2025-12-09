import { useState } from "react";
import API from "../api/api";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/api/subscribers", { email });
    alert("Subscribed!");
    setEmail("");
  };

  return (
    <form onSubmit={submit} className="bg-white p-4 rounded shadow-sm max-w-md">
      <h2 className="font-semibold mb-2">Subscribe to our Newsletter</h2>

      <div className="flex gap-2">
        <input
          required
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-3 py-2 border rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Subscribe
        </button>
      </div>
    </form>
  );
}
