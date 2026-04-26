function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.images} alt={project.title} />

      <div className="project-content">
        <h2>{project.title}</h2>

        <p className="project-description">
          {project.description}
        </p>

        <p className="project-tech">
          <strong>Technologies:</strong> {project.technologiesUsed}
        </p>

        <div className="project-links">
          <a href={project.link} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;