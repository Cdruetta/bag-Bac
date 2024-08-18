
import 'bootstrap/js/dist/modal'
document.addEventListener("DOMContentLoaded", function () {
  // Cargar el contenido del footer
  const footerContainer = document.getElementById("footer-container");
  fetch("footer.html")
      .then(response => response.text())
      .then(data => {
          footerContainer.innerHTML = data;
      });
});

document.addEventListener("DOMContentLoaded", function() {
  // Información de la imagen en el carrusel
  const carousel1 = document.querySelector("#carousel-demo");
  const infoContainer = document.querySelector("#info-container");
  const infoContent = document.querySelector("#info-content");

  carousel1.addEventListener("click", function(event) {
      if (event.target.tagName === "IMG") {
          const info = event.target.getAttribute("data-info");
          infoContent.textContent = info;
          infoContainer.style.display = "block";
      }
  });

  infoContainer.addEventListener("click", function(event) {
      if (event.target === infoContainer) {
          infoContainer.style.display = "none";
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Desplazamiento al formulario de contacto
  const carouselImages = document.querySelectorAll('.carousel-image');
  const contactForm = document.getElementById('contact-form');

  carouselImages.forEach(image => {
      image.addEventListener('click', function () {
          contactForm.scrollIntoView({ behavior: 'smooth' });
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  // Mostrar información al pasar el ratón sobre una imagen del carrusel
  const carouselImages = document.querySelectorAll('.carousel-image');

  carouselImages.forEach(image => {
      image.addEventListener('mouseover', function () {
          const infoText = this.getAttribute('data-info');
          const overlayContent = this.nextElementSibling.querySelector('.overlay-content');
          overlayContent.textContent = infoText;
      });

      image.addEventListener('mouseout', function () {
          const overlayContent = this.nextElementSibling.querySelector('.overlay-content');
          overlayContent.textContent = '';
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Manejo del menú burger en Bootstrap
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-toggler'), 0);

  if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
              const target = el.dataset.bsTarget;
              const $target = document.querySelector(target);

              // Alterna la clase "show" en el menú
              $target.classList.toggle('show');
          });
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // Mostrar y ocultar el botón de "scroll to top"
  var scrollToTopButton = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
          scrollToTopButton.classList.add('is-active');
      } else {
          scrollToTopButton.classList.remove('is-active');
      }
  });

  scrollToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
