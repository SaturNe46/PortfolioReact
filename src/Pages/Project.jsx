import { useEffect, useState } from "react";
import ProjectCard from "../Component/ProjectCard";

function Project() {
    const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfoliozooapi.onrender.com/api/projects")
      .then(res => res.json())
      .then(data => {
        setProjects(data);
      })
      .catch(err => console.error("Error:", err));
  }, []);

  return (
    <section class="projects">
        <h1 class="projects-title">My Projects</h1>

        <div id="projectHolder">
              {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        </div>
    </section>
  );
}

export default Project;