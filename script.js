document.querySelectorAll('img').forEach(image => {
  image.addEventListener('contextmenu', function(e) {
      e.preventDefault(); // Prevent the default context menu
      // Optionally, you can display an alert or a custom message
      // alert("Right-clicking is disabled on images.");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const openModalBtn = document.getElementById('openModalBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalOverlay = document.getElementById('modalOverlay');

  // Function to open the modal
  function openModal() {
      modalOverlay.classList.add('active');
      // Optional: Disable scrolling on the body when modal is open
      document.body.style.overflow = 'hidden';
  }

  // Function to close the modal
  function closeModal() {
      modalOverlay.classList.remove('active');
      // Optional: Re-enable scrolling on the body
      document.body.style.overflow = 'auto';
  }

  // Event listeners
  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);

  // Close modal if overlay is clicked
  modalOverlay.addEventListener('click', (event) => {
      if (event.target === modalOverlay) {
          closeModal();
      }
  });

  // Close modal if Escape key is pressed
  document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && modalOverlay.classList.contains('active')) {
          closeModal();
      }
  });
});