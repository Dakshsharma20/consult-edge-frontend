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

  const inputClass =
    "w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-xl shadow-sm " +
    "focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition text-gray-900 placeholder-gray-500";

  return (
    <form
      onSubmit={submit}
      className="space-y-4 p-6 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-2">
        Contact Us
      </h2>

      <input
        required
        placeholder="Full Name"
        value={form.fullName}
        onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        className={inputClass}
      />

      <input
        required
        placeholder="Email Address"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className={inputClass}
      />

      <input
        placeholder="Mobile Number"
        value={form.mobile}
        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        className={inputClass}
      />

      <input
        placeholder="City"
        value={form.city}
        onChange={(e) => setForm({ ...form, city: e.target.value })}
        className={inputClass}
      />

      <button
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg
                   hover:bg-blue-700 hover:shadow-xl transition active:scale-95"
      >
        Submit
      </button>
    </form>
  );
}
