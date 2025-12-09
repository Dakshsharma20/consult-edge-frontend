import React, { useEffect, useState } from "react";
import API from "../api/api";
import AddClientForm from "../components/AdminForms/AddClientForm";
import AddProjectForm from "../components/AdminForms/AddProjectForm";

export default function Admin() {
  const [contacts, setContacts] = useState([]);
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    API.get("/api/contact").then((res) => setContacts(res.data)).catch(()=>{});
    API.get("/api/subscribers").then((res) => setSubscribers(res.data)).catch(()=>{});
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      <section className="grid md:grid-cols-2 gap-6 mb-10">
  <AddProjectForm />
  <AddClientForm />
</section>


      {/* Contacts */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3">Contact Requests</h2>
        <div className="bg-white p-4 rounded shadow-sm">
          {contacts.length ? (
            contacts.map((c) => (
              <div key={c._id} className="border-b py-2">
                <strong>{c.fullName}</strong> — {c.email} — {c.city}
              </div>
            ))
          ) : (
            <p>No contact requests yet.</p>
          )}
        </div>
      </section>

      {/* Subscribers */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Newsletter Subscribers</h2>
        <div className="bg-white p-4 rounded shadow-sm">
          {subscribers.length ? (
            subscribers.map((s) => (
              <div key={s._id} className="border-b py-2">
                {s.email}
              </div>
            ))
          ) : (
            <p>No subscribers yet.</p>
          )}
        </div>
      </section>
    </div>
  );
}
