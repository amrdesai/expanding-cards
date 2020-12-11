// Variables
const panels = document.querySelectorAll('.panel');

// Function: Remove active class from all panels
const removeActiveClasses = () => {
    panels.forEach((panel) => panel.classList.remove('active'));
};

// Event Listener: Panel click event handler
panels.forEach((panel) => {
    panel.addEventListener('click', (e) => {
        removeActiveClasses();
        panel.classList.add('active');
    });
});
