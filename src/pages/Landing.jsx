import React, { useEffect, useState } from "react";
import API from "../api/api";
import ProjectCard from "../components/ProjectCard";
import ClientCard from "../components/ClientCard";
import ContactForm from "../components/ContactForm";
import NewsletterForm from "../components/NewsletterForm";

export default function Landing() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    API.get("/api/projects")
      .then((res) => setProjects(res.data))
      .catch(() => {});

    API.get("/api/clients")
      .then((res) => setClients(res.data))
      .catch(() => {});
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-16">

        {/* Left Side */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Smart Solutions for  
            <span className="text-blue-600"> Modern Businesses</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-md">
            Empowering businesses with professional project solutions, strategic guidance,
            and long-term client success.
          </p>

          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-lg transition">
            Explore More →
          </button>
        </div>

        {/* Right Side - Contact Glass Card */}
        <div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Get a Free Consultation
          </h3>
          <ContactForm compact />
        </div>
      </section>


      {/* PROJECTS SECTION */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length ? (
            projects.map((p) => <ProjectCard key={p._id} project={p} />)
          ) : (
            <p className="text-gray-600">No projects added yet.</p>
          )}
        </div>
      </section>


      {/* CLIENTS SECTION */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Happy Clients</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.length ? (
            clients.map((c) => <ClientCard key={c._id} client={c} />)
          ) : (
            <p className="text-gray-600">No clients added yet.</p>
          )}
        </div>
      </section>


      {/* NEWSLETTER SECTION */}
      <section className="mb-20">
        <div className="bg-blue-600 text-white p-10 rounded-2xl shadow-xl">
          <NewsletterForm />
        </div>
      </section>

    </div>
  );
}
