import React, { useState } from "react";
import "./styles.css";

const CreateProjectModal = ({ isOpen, onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "Web Development",
    tags: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.description) {
      alert("Please fill in all required fields");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append(
      "tags",
      formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag)
        .join(",")
    );

    if (formData.thumbnail) {
      data.append("thumbnail", formData.thumbnail);
    }

    try {
      const response = await fetch("http://localhost:5000/api/projects", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(
          "Failed to create project: " +
            (errorData.message || response.statusText)
        );
        return;
      }

      const result = await response.json();

      onCreate(result);
      setFormData({
        name: "",
        description: "",
        category: "Web Development",
        tags: "",
        thumbnail: "",
      });

      onClose();
    } catch (error) {
      alert("An error occurred: " + error.message);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="header">
          <h2 className="title">Create New Project</h2>
          <button className="closeButton" onClick={onClose} type="button">
            ×
          </button>
        </div>

        <form className="formContainer" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label className="label" htmlFor="name">
              Project Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter project name"
              className="input"
              required
            />
          </div>

          <div className="formGroup">
            <label className="label" htmlFor="description">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter project description"
              rows="4"
              className="textarea"
              required
              maxLength={100}
            />
          </div>

          <div className="formGroup">
            <label className="label" htmlFor="category">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="select"
              required
            >
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Cloud & Deployment">Cloud & Deployment</option>
              <option value="Design">Design</option>
              <option value="AI">AI</option>
            </select>
          </div>

          <div className="formGroup">
            <label className="label" htmlFor="tags">
              Technologies (comma-separated)
            </label>
            <input
              id="tags"
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
              className="input"
            />
          </div>

          <div className="formGroup">
            <label className="label" htmlFor="thumbnail">
              Thumbnail Image
            </label>

            <input
              id="thumbnail"
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  thumbnail: e.target.files[0],
                }))
              }
              className="input"
            />
          </div>

          <div className="buttonGroup">
            <button type="button" onClick={onClose} className="cancelButton">
              Cancel
            </button>
            <button type="submit" className="submitButton">
              Create Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProjectModal;
