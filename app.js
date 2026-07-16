// app.js
import { projectsData } from './data/projects.js';
import { landingsData } from './data/landings.js';

// Selectores del DOM
const projectsListContainer = document.getElementById('projects-list');
const landingsListContainer = document.getElementById('landing-pages-list');

// 1. Renderizador de Proyectos Principales
function loadProjects(projects) {
  if (!projectsListContainer) return;
  
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
        <p class="projects__card-description">${project.description}</p>
        <ul class="projects__card-tech-list">
          ${project.tech.map(tech => `<li>${tech}</li>`).join('')}
        </ul>
        <div class="projects__card-links">
          <a class="projects__card-link" href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a class="projects__card-link" href="${project.live}" target="_blank" rel="noopener noreferrer">Live Demo</a>
        </div>
      </div>
    </article>
  `).join('');

  projectsListContainer.innerHTML = cardsHTML;
}

// 2. Renderizador de Landing Pages
function loadLandings(landings) {
  if (!landingsListContainer) return;

  const landingsHTML = landings.map(landing => `
    <article class="landing-pages__item">
      <span class="landing-pages__tag">
        <a target="_blank" href="${landing.link}" rel="noopener noreferrer">Live Demo</a>
      </span>
      <h3 class="landing-pages__name">${landing.title}</h3>
      <p class="landing-pages__description">${landing.description}</p>
    </article>
  `).join('');

  landingsListContainer.innerHTML = landingsHTML;
}

// Inicialización de ambos componentes al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  loadProjects(projectsData);
  loadLandings(landingsData);
});