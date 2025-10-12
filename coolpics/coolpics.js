//  Menu toggle
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

function toggleMenu() {
  navMenu.classList.toggle('hide');
}

menuButton.addEventListener('click', toggleMenu);

// Handle resize
function handleResize() {
  if (window.innerWidth > 1000) {
    navMenu.classList.remove('hide');
  } else {
    navMenu.classList.add('hide');
  }
}

handleResize();
window.addEventListener('resize', handleResize);

const gallery = document.querySelector('.gallery');

// click on image
gallery.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('img');
  if (!clickedImage) return; 

  // Create dialog element
  const modal = document.createElement('dialog');
  modal.classList.add('image-viewer');

  // small to large image
  const srcBase = clickedImage.src.split('-')[0];
  const largeSrc = `${srcBase}-full.jpeg`;

  // Add HTML inside the dialog
  modal.innerHTML = `
    <img src="${largeSrc}" alt="${clickedImage.alt}">
    <button class="close-viewer">X</button>
  `;

  document.body.appendChild(modal);
  modal.showModal();

  // Close button handler
  const closeButton = modal.querySelector('.close-viewer');
  closeButton.addEventListener('click', () => modal.close());

  // Clicking outside image closes it
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }
  });

  // Remove modal from DOM after closing
  modal.addEventListener('close', () => modal.remove());
});
