document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('themeToggle');
  const body = document.body;

  // Load saved theme
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    toggleBtn.textContent = '🌙';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    const isLight = body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    toggleBtn.textContent = isLight ? '🌙' : '☀️';
  });
});
