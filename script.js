document.addEventListener("DOMContentLoaded", function() {
    const toggleBtn = document.querySelector(".toggle-btn");
    const body = document.body;
    
    toggleBtn.addEventListener("click", function() {
        body.classList.toggle("dark-mode");
        localStorage.setItem("dark-mode", body.classList.contains("dark-mode"));
    });
    
    if (localStorage.getItem("dark-mode") === "true") {
        body.classList.add("dark-mode");
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hover effects for projects
    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'scale(1.1)';
            project.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'scale(1)';
            project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
