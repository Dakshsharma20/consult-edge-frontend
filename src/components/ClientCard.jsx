export default function ClientCard({ client }) {
  return (
    <div className="bg-white p-4 rounded shadow-sm">
      <img
        src={client.imageUrl || '/avatar.png'}
        className="h-14 w-14 rounded-full object-cover"
        alt={client.name}
      />
      <h3 className="font-semibold mt-3">{client.name}</h3>
      <p className="text-sm text-gray-500">{client.designation}</p>
      <p className="text-sm text-gray-600 mt-2">{client.description}</p>
    </div>
  );
}
