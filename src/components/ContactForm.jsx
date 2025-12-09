import { useState } from "react";
import API from "../api/api";

export default function ContactForm({ compact }) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/contact", form);
      alert("We will contact you soon!");
      setForm({ fullName: "", email: "", mobile: "", city: "" });
    } catch {
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3">
      <input
        required
        placeholder="Full Name"
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      />
      <input
        required
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      />
      <input
        placeholder="Mobile"
        value={form.mobile}
        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      />
      <input
        placeholder="City"
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
