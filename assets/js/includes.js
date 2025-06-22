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
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Ensure menu starts closed when the header loads
  if (navLinks) {
    navLinks.classList.remove("show");
  }

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const anchor = dropdown.querySelector('a');
    const submenu = dropdown.querySelector('.dropdown-menu');

    anchor.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const isOpen = dropdown.classList.contains('open');
        dropdowns.forEach(d => d.classList.remove('open'));
        if (!isOpen) {
          dropdown.classList.add('open');
        }
      }
    });
  });

  // Optional: Close dropdown when clicking outside on mobile
  document.addEventListener('click', function (e) {
    if (window.innerWidth <= 768) {
      const isClickInside = e.target.closest('.dropdown');
      if (!isClickInside) {
        document.querySelectorAll('.dropdown.open').forEach(d => d.classList.remove('open'));
      }
    }
  });

  // Reset menu state when resizing to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('show');
      dropdowns.forEach(d => d.classList.remove('open'));
    }
  });
}

