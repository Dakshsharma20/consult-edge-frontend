import React, { useEffect, useState } from 'react'
import API from '../api/api'
import ProjectCard from '../components/ProjectCard'
import ClientCard from '../components/ClientCard'
import ContactForm from '../components/ContactForm'
import NewsletterForm from '../components/NewsletterForm'

export default function Landing() {
  const [projects, setProjects] = useState([])
  const [clients, setClients] = useState([])

  useEffect(() => {
    API.get('/api/projects').then(res => setProjects(res.data)).catch(() => {})
    API.get('/api/clients').then(res => setClients(res.data)).catch(() => {})
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-6 items-center mb-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">ConsultEdge — Smart Solutions</h1>
          <p className="text-gray-600">We deliver professional project solutions and happy clients.</p>
        </div>

        <div className="bg-blue-600 p-6 rounded-lg text-white">
          <h3 className="text-xl font-semibold mb-4">Get a Free Consultation</h3>
          <ContactForm compact />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Our Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length ? projects.map(p => <ProjectCard key={p._id} project={p} />) : <p>No projects yet.</p>}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Happy Clients</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.length ? clients.map(c => <ClientCard key={c._id} client={c} />) : <p>No clients yet.</p>}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mb-10">
        <NewsletterForm />
      </section>

    </div>
  )
}
