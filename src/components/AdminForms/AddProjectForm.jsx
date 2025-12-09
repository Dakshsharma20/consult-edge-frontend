import { useState } from "react";
import API from "../../api/api";

export default function AddProjectForm() {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("description", form.description);
    if (image) fd.append("image", image);

    try {
      await API.post("/api/projects", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Project added!");
      setForm({ name: "", description: "" });
      setImage(null);
    } catch (err) {
      alert("Error adding project");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3 bg-white p-4 rounded shadow-sm">

      <h2 className="text-lg font-semibold">Add Project</h2>

      <input
        required
        placeholder="Project Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        className="w-full px-3 py-2 border rounded"
      />

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        className="w-full"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Project
      </button>
    </form>
  );
}
