export default function ClientCard({ client }) {
  return (
    <div
      className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg 
                 hover:shadow-2xl transition-all duration-300 
                 border border-gray-200 p-6 hover:-translate-y-1"
    >
      {/* Avatar */}
      <div className="flex items-center space-x-4">
        <img
          src={client.imageUrl || "/avatar.png"}
          alt={client.name}
          className="h-16 w-16 rounded-full object-cover shadow-md border border-gray-300"
        />

        <div>
          <h3 className="text-lg font-bold text-gray-900">
            {client.name}
          </h3>
          <p className="text-sm text-blue-600 font-medium">
            {client.designation}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-4 leading-relaxed">
        {client.description}
      </p>
    </div>
  );
}
