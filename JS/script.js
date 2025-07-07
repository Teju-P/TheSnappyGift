document.querySelectorAll('img').forEach(image => {
  image.addEventListener('contextmenu', function(e) {
      e.preventDefault(); // Prevent the default context menu
      // Optionally, you can display an alert or a custom message
      // alert("Right-clicking is disabled on images.");
  });
});