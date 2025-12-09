import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">ConsultEdge</div>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/admin" className="text-gray-700 hover:text-blue-600">Admin</Link>
        </nav>
      </div>
    </header>
  )
}
