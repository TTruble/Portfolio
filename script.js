document.addEventListener('DOMContentLoaded', function() {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        project.addEventListener('click', function() {
            const desc = this.querySelector('p');
            if (desc.style.display === 'none' || !desc.style.display) {
                desc.style.display = 'block';
            } else {
                desc.style.display = 'none';
            }
        });
    });
});
