import React, { useEffect, useState } from "react";
import { ReactComponent as AddIcon } from "../../assets/add-icon.svg";
import CreateProjectModal from "../createprojectmodal/CreateProjectModal";
import "./styles.css";

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const categories = [
  { key: "Web Development", label: "Web Developpement", width: "280px" },
  {
    key: "Mobile Development",
    label: "Mobile Developpement",
    width: "280px",
  },
  { key: "Cloud & Deployment", label: "Cloud & Deployment", width: "280px" },
  { key: "Design", label: "Design", width: "180px" },
  { key: "AI", label: "AI", width: "90px" },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Web Development");

  const fetchProjects = (category) => {
    let url = `${backendUrl}/api/projects`;

    if (category) {
      url = `${backendUrl}/api/projects/category?category=${encodeURIComponent(
        selectedCategory
      )}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  };

  useEffect(() => {
    fetchProjects(selectedCategory);
  }, [selectedCategory]);

  const handleCreateProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
    setIsModalOpen(false);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="projects-section">
      <div className="projects-header">
        <h1 className="section-title">Projects</h1>

        <div
          className="create-button"
          style={{ cursor: "pointer" }}
          onClick={() => setIsModalOpen(true)}
        >
          <span className="text">Create project</span>{" "}
          <AddIcon className="create-project-icon" />
        </div>
      </div>

      <div className="projects-search-bar">
        <input
          className="projects-search-bar-input"
          placeholder="Search projects ...."
        />
        <div className="search-bar-search-icon">
          <img src="./icons/search-icon.svg" alt="search icon" />
        </div>
      </div>

      <div className="projects-categories">
        {categories.slice(0, 3).map(({ key, label, width }) => (
          <div
            key={key}
            className={`category-item ${selectedCategory === key ? "active" : ""
              }`}
            style={{ width }}
            onClick={() => handleCategoryClick(key)}
          >
            {label}
          </div>
        ))}

        <div className="both-categories">
          {categories.slice(3).map(({ key, label, width }) => (
            <div
              key={key}
              className={`category-item ${selectedCategory === key ? "active" : ""
                }`}
              style={{ width }}
              onClick={() => handleCategoryClick(key)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="card-container">
        {projects.map((project) => (
          <div className="card-column" key={project._id}>
            <div className="card">
              <div className="card-thumbnail">
                <img
                  className="card-image"
                  src={
                    project.thumbnail && project.thumbnail.startsWith("data:")
                      ? project.thumbnail
                      : project.thumbnail
                        ? `${backendUrl}${project.thumbnail}`
                        : "/images/default.webp"
                  }
                  alt="project thumbnail"
                />
              </div>

              <div className="card-content">
                <div className="card-category">
                  {project.category || "Other"}
                </div>

                <h1 className="card-title">{project.name}</h1>

                <p className="card-description">{project.description}</p>

                <div className="card-technologies">
                  <ul>
                    {project.tags?.map((tag, index) => (
                      <li key={index}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CreateProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateProject}
      />
    </div>
  );
};

export default Projects;
