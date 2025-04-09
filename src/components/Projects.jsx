import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import projects from '../data/projects';

const Projects = () => {
  return (
    <section className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Featured Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map(project => (
          <article key={project.id} className={styles.projectCard}>
            <img 
              src={project.image} 
              alt={project.title} 
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, index) => (
                  <span key={index} className={styles.techPill}>{tech}</span>
                ))}
              </div>
              <Link 
                to={project.link} 
                className={styles.projectLink}
              >
                View Project →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
