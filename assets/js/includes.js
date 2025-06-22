// Load header and footer
function loadHTML(selector, file) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
      if (selector === '#header') setupMenuToggle(); // Setup toggle only after header loads
    })
    .catch(error => console.error(`Could not load ${file}:`, error));
}

const scriptPath = document.currentScript.getAttribute('src');
const basePath = scriptPath.replace(/js\/includes\.js(?:\?.*)?$/, '');

loadHTML("#header", `${basePath}partials/header.html`);
loadHTML("#footer", `${basePath}partials/footer.html`);

function setupMenuToggle() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navLinks) {
    navLinks.classList.remove('show');
  }

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('show');
    }
  });
}

