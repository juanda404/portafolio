// js/app.js
import { projectsData } from './data/projects.js';

const projectsListContainer = document.getElementById('projects-list');

// Función optimizada para mapear e inyectar el HTML de una sola vez
function loadProjects(projects) {
  const cardsHTML = projects.map(project => `
    <article class="projects__card">
      <figure class="projects__card-figure">
        <img
          class="projects__card-image"
          src="${project.img}"
          alt="${project.alt}"
        />
      </figure>
      <div class="projects__card-content">
        <h3 class="projects__card-title">${project.title}</h3>
        <p class="projects__card-description">
          ${project.description}
        </p>
        <ul class="projects__card-tech-list">
          ${project.tech.map(tech => `<li>${tech}</li>`).join('')}
        </ul>
        <div class="projects__card-links">
          <a
            class="projects__card-link"
            href="${project.github}"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub</a
          >
          <a
            class="projects__card-link"
            href="${project.live}"
            target="_blank"
            rel="noopener noreferrer"
            >Live Demo</a
          >
        </div>
      </div>
    </article>
  `).join(''); // El .join('') une todo el array en un solo string plano

  // Modificación del DOM en una sola operación de escritura
  projectsListContainer.innerHTML = cardsHTML;
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  loadProjects(projectsData);
});