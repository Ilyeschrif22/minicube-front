import React, { useEffect, useState } from "react";
import { ReactComponent as AddIcon } from "../../assets/add-icon.svg";
import CreateProjectModal from "../createprojectmodal/CreateProjectModal";
import "./styles.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProjects = () => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error fetching projects:", err));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleCreateProject = (newProject) => {
    setProjects((prev) => [newProject, ...prev]);
    setIsModalOpen(false);
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
        <div className="first-categorie">Web Developpement</div>
        <div className="second-categorie">Mobile Developpement</div>
        <div className="third-categorie">Cloud & Deployement</div>

        <div className="both-categories">
          <div className="fourth-categorie">Design</div>
          <div className="fifth-categorie">AI</div>
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
                      ? `http://localhost:5000${project.thumbnail}`
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
