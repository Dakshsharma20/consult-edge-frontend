import { useState } from "react";
import API from "../api/api";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/api/subscribers", { email });
      alert("Subscribed!");
      setEmail("");
    } catch {
      alert("Subscription failed. Try again.");
    }
  };

  return (
    <form
      onSubmit={submit}
      className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl 
                 p-6 max-w-xl mx-auto border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-3">
        Stay Updated ✉️
      </h2>

      <p className="text-gray-600 text-sm mb-4">
        Subscribe to receive updates on our latest projects and services.
      </p>

      {/* MOBILE FRIENDLY INPUT + BUTTON */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 items-stretch sm:items-center">
        
        {/* Input */}
        <input
          required
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-3 border border-gray-300 rounded-xl 
                     focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                     transition bg-white/80 placeholder-gray-500 text-gray-900"
        />

        {/* Button */}
        <button
          className="w-full sm:w-auto px-5 py-3 bg-blue-600 hover:bg-blue-700 
                     text-white rounded-xl font-semibold shadow-md transition 
                     active:scale-95"
        >
          Subscribe
        </button>

      </div>
    </form>
  );
}
