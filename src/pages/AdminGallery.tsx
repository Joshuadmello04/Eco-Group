import { useState } from "react";

const AdminGallery = () => {
  const [file, setFile] = useState<File | null>(null);
  const [categoryId, setCategoryId] = useState("");

  const uploadImage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file || !categoryId) return;

    const form = new FormData();
    form.append("image", file);
    form.append("categoryId", categoryId);
    form.append("title", file.name);

    await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/admin/upload`, {
      method: "POST",
      body: form,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    });

    alert("Image uploaded");
  };

  return (
    <form onSubmit={uploadImage} className="p-8">
      <input
        type="number"
        placeholder="Category ID"
        onChange={(e) => setCategoryId(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button type="submit">Upload</button>
    </form>
  );
};

export default AdminGallery;
