const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const bars = document.querySelectorAll('.bar');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  bars.forEach(bar => bar.classList.toggle('active'));
});

const navLinks = document.querySelectorAll('.nav-menu li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    bars.forEach(bar => bar.classList.remove('active'));
  });
});

const sections = document.querySelectorAll('section');
sections.forEach(section => {
  const heading = section.querySelector('h2');
  const content = section.querySelector('div');
  content.classList.add('hidden');
  heading.addEventListener('click', () => {
    content.classList.toggle('hidden');
    heading.classList.toggle('expanded');
  });
});
