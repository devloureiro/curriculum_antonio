document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const toggleThemeBtn = document.createElement('button');
    toggleThemeBtn.textContent = 'Mudar Tema';
    document.header.appendChild(toggleThemeBtn);

    toggleThemeBtn.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
    });
});
