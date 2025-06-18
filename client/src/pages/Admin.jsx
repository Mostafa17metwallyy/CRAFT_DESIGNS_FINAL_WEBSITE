import React, { useState } from "react";
import "../styles/Admin.css";

const Admin = () => {
  const [auth, setAuth] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  // Existing state
  const [formData, setFormData] = useState([]);
  const [newProject, setNewProject] = useState({
    swiper: "booths",
    iframe: "",
    title: "",
    category: "",
    behanceUrl: "",
  });
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);

  // New: Production project state
  const [productionImages, setProductionImages] = useState([]);
  const [productionTitle, setProductionTitle] = useState("");
  const [productionProjects, setProductionProjects] = useState([]);

  // ==== LOGIN ====
  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginInfo),
    });

    if (res.ok) {
      setAuth(true);
      fetchMessages();
      fetchProjects();
      fetchProductionProjects();
    } else {
      alert("❌ Invalid credentials");
    }
  };

  // ==== FETCH ====
  const fetchMessages = async () => {
    const res = await fetch("http://localhost:5000/api/messages");
    const data = await res.json();
    setFormData(data);
  };

  const fetchProjects = async () => {
    const res = await fetch("http://localhost:5000/api/projects");
    const data = await res.json();
    setProjects(data);
  };

  const fetchProductionProjects = async () => {
    const res = await fetch("http://localhost:5000/api/production");
    const data = await res.json();
    setProductionProjects(data);
  };

  // ==== DESIGN HOUSE SUBMIT ====
  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    if (!newProject.iframe || !newProject.title || !newProject.category) {
      alert("⚠️ Please fill out all fields.");
      return;
    }

    setLoading(true);
    const res = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject),
    });

    if (res.ok) {
      alert("✅ Project added!");
      setNewProject({ swiper: "booths", iframe: "", title: "", category: "", behanceUrl: "" });
      fetchProjects();
    } else {
      alert("❌ Failed to add project");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this project?");
    if (!confirm) return;

    const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert("🗑️ Project deleted");
      fetchProjects();
    } else {
      alert("❌ Failed to delete project");
    }
  };

  // ==== PRODUCTION SUBMIT ====
  const handleProductionSubmit = async (e) => {
    e.preventDefault();
    if (!productionTitle || productionImages.length === 0) {
      alert("⚠️ Add a title and at least one image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", productionTitle);
    for (let i = 0; i < productionImages.length; i++) {
      formData.append("images", productionImages[i]);
    }

    const res = await fetch("http://localhost:5000/api/production", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("🎬 Production project uploaded!");
      setProductionTitle("");
      setProductionImages([]);
      fetchProductionProjects();
    } else {
      alert("❌ Failed to upload");
    }
  };

  const handleProductionDelete = async (id) => {
    const confirm = window.confirm("Delete this production project?");
    if (!confirm) return;
    const res = await fetch(`http://localhost:5000/api/production/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      alert("🗑️ Deleted");
      fetchProductionProjects();
    }
  };

  // ==== RENDER ====
  if (!auth) {
    return (
      <div className="admin-page">
        <div className="admin-login-container">
          <div className="admin-login">
            <h2>🔐 Admin Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Admin Email"
                value={loginInfo.email}
                onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                value={loginInfo.password}
                onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
              />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      {/* DESIGN HOUSE */}
      <h2>➕ Add New Design Project</h2>
      <form className="admin-form" onSubmit={handleProjectSubmit}>
        <select
          value={newProject.swiper}
          onChange={(e) => setNewProject({ ...newProject, swiper: e.target.value })}
        >
          <option value="booths">Booths</option>
          <option value="events">Events</option>
          <option value="interior">Interior</option>
        </select>
        <input
          type="text"
          placeholder="Iframe Embed Code"
          value={newProject.iframe}
          onChange={(e) => setNewProject({ ...newProject, iframe: e.target.value })}
        />
        <input
          type="text"
          placeholder="Project Title"
          value={newProject.title}
          onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category (e.g. Branding)"
          value={newProject.category}
          onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
        />
        <input
          type="text"
          placeholder="Behance Project URL"
          value={newProject.behanceUrl}
          onChange={(e) => setNewProject({ ...newProject, behanceUrl: e.target.value })}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Project"}
        </button>
      </form>

      {newProject.iframe && (
        <div className="iframe-preview">
          <p>📦 Preview:</p>
          <iframe
            srcDoc={newProject.iframe}
            style={{ width: "100%", height: "200px", border: "1px solid #ccc" }}
            title="Preview"
          ></iframe>
        </div>
      )}

      <hr />
      <h2>📂 Existing Design Projects</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div key={proj._id} className="project-card">
            <div dangerouslySetInnerHTML={{ __html: proj.iframe }} />
            <p>
              <strong>{proj.title}</strong> | {proj.category} | {proj.swiper}
            </p>
            <button onClick={() => handleDelete(proj._id)}>🗑 Delete</button>
          </div>
        ))}
      </div>

      {/* PRODUCTION SECTION */}
      <hr />
      <h2>🎬 Add Production Project</h2>
      <form className="admin-form" onSubmit={handleProductionSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={productionTitle}
          onChange={(e) => setProductionTitle(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setProductionImages([...e.target.files])}
        />
        <button type="submit">Upload</button>
      </form>

      <hr />
      <h2>📸 Production Projects</h2>
      <div className="projects-grid">
        {productionProjects.map((proj) => (
          <div key={proj._id} className="project-card">
            <p><strong>{proj.title}</strong></p>
            <div className="image-preview">
              {proj.images.map((img, i) => (
                <img
                  key={i}
                  src={`http://localhost:5000/uploads/${img}`}
                  alt=""
                  style={{ width: "100%", maxHeight: "150px", objectFit: "cover", marginBottom: "5px" }}
                />
              ))}
            </div>
            <button onClick={() => handleProductionDelete(proj._id)}>🗑 Delete</button>
          </div>
        ))}
      </div>

      {/* CONTACT FORM */}
      <hr />
      <h2>📩 Contact Form Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((msg) => (
            <tr key={msg._id}>
              <td>{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.subject}</td>
              <td>{msg.message}</td>
              <td>{new Date(msg.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
