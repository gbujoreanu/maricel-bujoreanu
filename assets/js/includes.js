// Load header and footer
function loadHTML(selector, file, callback) {
  fetch(file)
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then(data => {
      document.querySelector(selector).innerHTML = data;
      if (callback) callback();
    })
    .catch(error => console.error(`Could not load ${file}:`, error));
}

const scriptPath = document.currentScript.getAttribute('src');
const basePath = scriptPath.replace(/js\/includes\.js(?:\?.*)?$/, '');
const rootPath = basePath.replace(/assets\/?$/, '');

loadHTML("#header", `${basePath}partials/header.html`, () => {
  updateNavLinks(rootPath);
  setupMenuToggle();
});
loadHTML("#footer", `${basePath}partials/footer.html`);

function updateNavLinks(prefix) {
  document.querySelectorAll('#header a[data-href]').forEach(link => {
    const page = link.getAttribute('data-href');
    link.setAttribute('href', `${prefix}${page}`);
  });
}

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

