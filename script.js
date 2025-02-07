// Get the button and body elements
const toggleButton = document.getElementById('toggleButton');
const h1Button = document.getElementById('toggleh1');
const body = document.body;

// Add event listener to the button
toggleButton.addEventListener('click', function () {
    // Toggle dark mode class on the body
    body.classList.toggle('dark-mode');

    // Update button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Cambiar a modo claro';
        toggleh1.textContent = 'De regreso a la luz!';
    } else {
        toggleButton.textContent = 'Cambiar a modo oscuro';
        toggleh1.textContent = 'Hacia la oscuridad!';

    }
});