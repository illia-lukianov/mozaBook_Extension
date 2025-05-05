const refsThemeToggle = {
    changeThemeToggle: document.getElementById('theme-toggle'),
}

document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.dataset.theme = localStorage.getItem('theme') ?? 'dark';
    updateThemeToggleButtonText(); 
});

function changeTheme() {
    refsThemeToggle.changeThemeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.dataset.theme;
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = newTheme;
        localStorage.setItem('theme', newTheme);
        updateThemeToggleButtonText(); 
    });
}

function updateThemeToggleButtonText() {
    if (refsThemeToggle.changeThemeToggle) {
        refsThemeToggle.changeThemeToggle.textContent = document.documentElement.dataset.theme === 'dark' ? '🌙' : '☀️';
    }
}

changeTheme();
