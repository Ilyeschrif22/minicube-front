import React, { useState } from "react";
import "./styles.css";

const categories = [
  { key: "Web Development", label: "Web Developpement", width: "320px" },
  { key: "Mobile Development", label: "Mobile Developpement", width: "320px" },
  { key: "Cloud & Deployment", label: "Cloud & Deployment", width: "320px" },
  { key: "Design", label: "Design", width: "180px" },
  { key: "AI", label: "AI", width: "130px" },
];

const staticProjects = [
   {
    _id: "1",
    name: "Distributed Architecture Platform",
    description:
      "Microservices-based distributed system built with Spring Boot and secured using Keycloak for authentication and authorization.",
    category: "Web Development",
    tags: ["Spring Boot", "Microservices", "Keycloak", "Docker"],
    thumbnail: "/images/springboot-microservices.png",
  },
  {
    _id: "2",
    name: "MERN Authentication System",
    description:
      "Full-stack authentication system built with the MERN stack.",
    category: "Web Development",
    tags: ["MongoDB", "Express", "React", "Node.js", "JWT", "Google OAuth", "bcrypt"],
    thumbnail: "/images/mern-auth.png",
  },
  {
    _id: "7",
    name: "Travel Tunisia",
    description:
      "Modern travel web application showcasing Tunisian destinations with interactive UI built in React.",
    category: "Web Development",
    tags: ["React", "JavaScript", "CSS"],
    thumbnail: "/images/traveltunisia.png",
  },
  {
    _id: "8",
    name: "LinkPro",
    description:
      "Professional landing page built with HTML and Tailwind CSS focused on clean design and performance.",
    category: "Web Development",
    tags: ["HTML", "Tailwind CSS"],
    thumbnail: "/images/Linkpro.png",
  },
  {
    _id: "9",
    name: "Note Taking App",
    description:
      "A simple and intuitive note-taking mobile application built with Kotlin for Android, featuring real-time sync and offline support.",
    category: "Mobile Development",
    tags: ["Kotlin", "Android"],
    thumbnail: "/images/kotlin.webp",
  },
  {
    _id: "10",
    name: "OCR Document Scanner",
    description:
      "Optical Character Recognition project that extracts text from documents and images using deep learning models for accurate text detection and recognition.",
    category: "AI",
    tags: ["Python", "TensorFlow", "OCR", "Deep Learning", "OpenCV"],
    thumbnail: "/images/ocr.webp",
  },
  {
    _id: "11",
    name: "YOLOv8 Object Detection",
    description:
      "Real-time object detection system using YOLOv8 architecture for identifying and locating multiple objects in images and video streams with high accuracy.",
    category: "AI",
    tags: ["YOLOv8", "Computer Vision", "Python", "PyTorch", "Real-time Detection"],
    thumbnail: "/images/yolov8.webp",
  },
  {
    _id: "12",
    name: "Price Prediction System",
    description:
      "Machine learning predictive model using Random Forest algorithm with Flask backend API for accurate price forecasting based on historical data and features.",
    category: "AI",
    tags: ["Python", "Random Forest", "Flask", "Scikit-learn", "REST API", "Machine Learning"],
    thumbnail: "/images/price-prediction.webp",
  },
  {
    _id: "13",
    name: "EasyWallet",
    description:
      "Sandbox for wallet payment testing with integration of multiple payment methods and transaction simulation.",
    category: "Web Development",
    tags: ["React", "Express", "Node.js", "Railway", "Vercel"],
    thumbnail: "/images/easywallet.png",
  },
];


const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = staticProjects.filter((project) => {
    const matchesCategory = project.category === selectedCategory;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return matchesCategory;

    const inName = project.name?.toLowerCase().includes(q);
    const inDescription = project.description?.toLowerCase().includes(q);
    const inTags = project.tags?.some((tag) => tag.toLowerCase().includes(q));

    return matchesCategory && (inName || inDescription || inTags);
  });

  return (
    <div className="projects-section">
      <div className="projects-header">
        <h1 className="section-title">Projects</h1>
      </div>

      <div className="projects-search-bar">
        <input
          className="projects-search-bar-input"
          placeholder="Search projects ...."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="search-bar-search-icon">
          <img src="/icons/search-icon.svg" alt="search icon" />
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
        {filteredProjects.map((project) => (
          <div className="card-column" key={project._id}>
            <div className="card">
              <div className="card-thumbnail">
                <img
                  className="card-image"
                  src={project.thumbnail}
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
    </div>
  );
};

export default Projects;
