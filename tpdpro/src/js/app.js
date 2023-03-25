// Select the elements we'll need
const btn = document.querySelector('.btn');
const services = document.getElementById('services');

// Add an event listener to the button
btn.addEventListener('click', function() {
  // Scroll smoothly to the services section when button is clicked
  services.scrollIntoView({behavior: 'smooth'});
});

// Select the services grid and all the service elements
const servicesGrid = document.querySelector('.services-grid');
const servicesElements = servicesGrid.querySelectorAll('.service');

// Add a hover effect to each service element
servicesElements.forEach(function(service) {
  service.addEventListener('mouseenter', function() {
    this.classList.add('active');
  });
  service.addEventListener('mouseleave', function() {
    this.classList.remove('active');
  });
});

// Select the logo and add a click event listener
const logo = document.querySelector('.logo');
logo.addEventListener('click', function() {
  // Reload the page when the logo is clicked
  location.reload();
});