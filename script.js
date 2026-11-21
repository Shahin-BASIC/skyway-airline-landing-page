const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const dateInput = document.querySelector('input[name="date"]');
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString().slice(0, 10);
dateInput.min = localToday;

document.querySelector('#flight-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const from = data.get('from').trim();
  const to = data.get('to').trim();
  const date = data.get('date');
  const message = document.querySelector('#form-message');

  if (from.toLowerCase() === to.toLowerCase()) {
    message.textContent = 'Please choose two different cities.';
    return;
  }

  message.textContent = `Demo search ready: ${from} → ${to} on ${date}. Connect a flight-search API to retrieve real flights.`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
