export default function ProjectCard({ project }) {
  
  // --- IMAGE URL FIX ---
  const src =
    project.imageUrl && project.imageUrl.startsWith("http")
      ? project.imageUrl
      : `${import.meta.env.VITE_API_URL || "http://localhost:5000"}${project.imageUrl}`;

  return (
    <div
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg 
                 hover:shadow-2xl transition-all duration-300 
                 border border-gray-200 overflow-hidden hover:-translate-y-1"
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={src || "/placeholder.png"}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900">{project.name}</h3>

        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
}
