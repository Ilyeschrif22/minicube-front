import React, { useMemo, useState } from "react";
import "./styles.css";

const categories = [
  { key: "Web Development", label: "Web Development", width: "320px" },
  {
    key: "Mobile Development",
    label: "Mobile Development",
    width: "320px",
  },
  { key: "Cloud & Deployment", label: "Cloud & Deployment", width: "320px" },
  { key: "Design", label: "Design", width: "180px" },
  { key: "AI", label: "AI", width: "130px" },
];

const staticProjects = [
  {
    _id: "1",
    name: "Distributed Microservices Architecture",
    description:
      "Microservices system with API gateway routing, Eureka service discovery, centralized config server, and OAuth2 identity via Keycloak.",
    category: "Web Development",
    status: "Completed",
    outcome: "Improved service scalability and secure authentication across all modules.",
    links: {
      repo: "https://github.com/ilyeschrif/microservices-architecture",
      demo: "https://example.com/microservices-demo",
    },
    tags: ["Spring Cloud", "Eureka", "Keycloak", "API Gateway", "Config Server"],
    thumbnail: "/images/microservices.png",
  },
  {
    _id: "2",
    name: "DevOps CI/CD Pipeline",
    description:
      "MERN stack pipeline with Jenkins builds, Docker containerization, Kubernetes orchestration, and SonarQube code quality gates.",
    category: "Cloud & Deployment",
    status: "Completed",
    outcome: "Cut deployment time significantly with automated CI/CD and quality checks.",
    links: {
      repo: "https://github.com/ilyeschrif/devops-cicd-pipeline",
      demo: "https://example.com/devops-pipeline",
    },
    tags: ["Docker", "Jenkins", "Kubernetes", "SonarQube", "MERN"],
    thumbnail: "/images/devops-pipeline.webp",
  },
  {
    _id: "3",
    name: "OCR REST API",
    description:
      "Extracts text from images via a lightweight REST API built with FastAPI and Tesseract.",
    category: "AI",
    status: "In Progress",
    outcome: "Built a fast OCR endpoint with consistent extraction accuracy for scanned documents.",
    links: {
      repo: "https://github.com/ilyeschrif/ocr-rest-api",
    },
    tags: ["Python", "FastAPI", "Tesseract", "OCR"],
    thumbnail: "/images/ocr-api.png",
  },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [searchValue, setSearchValue] = useState("");

  const filteredProjects = useMemo(() => {
    return staticProjects.filter((project) => {
      const matchesCategory = project.category === selectedCategory;
      const search = searchValue.trim().toLowerCase();

      if (!search) return matchesCategory;

      return (
        matchesCategory &&
        (project.name.toLowerCase().includes(search) ||
          project.description.toLowerCase().includes(search) ||
          project.outcome.toLowerCase().includes(search) ||
          project.tags.some((tag) => tag.toLowerCase().includes(search)))
      );
    });
  }, [searchValue, selectedCategory]);

  return (
    <div className="projects-section">
      <div className="projects-header">
        <h1 className="section-title">Projects</h1>
      </div>

      <div className="projects-search-bar">
        <input
          className="projects-search-bar-input"
          placeholder="Search projects ...."
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <div className="search-bar-search-icon">
          <img src="./icons/search-icon.svg" alt="search icon" />
        </div>
      </div>

      <div className="projects-categories">
        {categories.slice(0, 3).map(({ key, label, width }) => (
          <div
            key={key}
            className={`category-item btn-swipe btn-swipe-primary ${selectedCategory === key ? "active" : ""}`}
            style={{ width }}
            onClick={() => setSelectedCategory(key)}
          >
            {label}
          </div>
        ))}

        <div className="both-categories">
          {categories.slice(3).map(({ key, label, width }) => (
            <div
              key={key}
              className={`category-item btn-swipe btn-swipe-primary ${selectedCategory === key ? "active" : ""}`}
              style={{ width }}
              onClick={() => setSelectedCategory(key)}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      <div className="card-container">
        {filteredProjects.map((project) => (
          <div className="card-column" key={project._id}>
            <div className="card">
              <div className="card-thumbnail">
                <img className="card-image" src={project.thumbnail} alt={project.name} />
              </div>

              <div className="card-content">
                <div className="card-category">{project.category}</div>
                <h1 className="card-title">{project.name}</h1>
                <p className="card-description">{project.description}</p>
                <div className="card-details">
                  <p>
                    <strong>Status:</strong> {project.status}
                  </p>
                  <p>
                    <strong>Outcome:</strong> {project.outcome}
                  </p>
                </div>

                {project.links && (
                  <div className="card-links">
                    {project.links.repo && (
                      <a href={project.links.repo} target="_blank" rel="noreferrer">
                        Repository
                      </a>
                    )}
                    {project.links.demo && (
                      <a href={project.links.demo} target="_blank" rel="noreferrer">
                        Live Demo
                      </a>
                    )}
                  </div>
                )}

                <div className="card-technologies">
                  <ul>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
        {filteredProjects.length === 0 && (
          <p className="empty-projects">No projects found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
