import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, payment processing, and inventory management.',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tags: ['JavaScript', 'Python', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather application with location-based forecasts, historical data visualization, and severe weather alerts.',
      tags: ['React', 'CSS', 'API Integration'],
      link: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio website with responsive design, smooth animations, and optimized performance for all devices.',
      tags: ['React', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with real-time data visualization, custom reports, and trend analysis.',
      tags: ['Python', 'JavaScript', 'Data Visualization'],
      link: '#'
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging app with end-to-end encryption, file sharing, voice/video calls, and group chat functionality.',
      tags: ['JavaScript', 'WebRTC', 'Socket.io'],
      link: '#'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <a href={project.link} className="project-card" key={index}>
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span className="tag" key={tagIndex}>{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-link">
                <span>View Project</span>
                <span className="arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
