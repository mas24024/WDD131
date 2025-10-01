const themeSelector = document.querySelector('#theme');
const body = document.body;
const logo = document.querySelector('#logo');

function changeTheme() {
  if (themeSelector.value === 'dark') {
    body.classList.add('dark');
    logo.src = 'images/byui-logo-white.png';   // dark mode logo
    logo.alt = 'BYU-Idaho White Logo';
  } else {
    body.classList.remove('dark');
    logo.src = 'images/byui-logo-blue.webp';   // light mode logo
    logo.alt = 'BYU-Idaho Blue Logo';
  }
}

themeSelector.addEventListener('change', changeTheme);
