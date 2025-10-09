
// Select elements
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
  //make sure user clicked an image, not empty space
  if (e.target.tagName === 'IMG') {
    // Replace name on file
    const largeSrc = e.target.src.replace('-sm', '-full');
    modalImage.src = largeSrc;
    modal.showModal(); // Opens the dialog modal
  }
}

// 🔹 Close modal on 'X' button click
closeButton.addEventListener('click', () => {
  modal.close();
});

// 🔹 Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

// 🔹 Optional: Close modal when pressing the Escape key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.open) {
    modal.close();
  }
});
