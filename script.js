// Get the button and body elements
const toggleButton = document.getElementById('toggleButton');
const body = document.body;

// Add event listener to the button
toggleButton.addEventListener('click', function () {
    // Toggle dark mode class on the body
    body.classList.toggle('dark-mode');

    // Update button text based on the current mode
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Turn off Dark Mode';
    } else {
        toggleButton.textContent = 'Turn on Dark Mode';
    }
});