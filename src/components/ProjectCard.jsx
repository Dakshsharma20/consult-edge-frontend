export default function ProjectCard({ project }) {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <img
        src={project.imageUrl || '/placeholder.png'}
        alt={project.name}
        className="h-40 w-full object-cover rounded"
      />

      <h3 className="font-semibold mt-3">{project.name}</h3>
      <p className="text-sm text-gray-600 mt-2">{project.description}</p>
    </div>
  );
}
