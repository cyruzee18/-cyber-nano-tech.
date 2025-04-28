document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    // e.preventDefault(); // Remove or comment out this line to allow navigation

    this.classList.remove('clicked'); // Reset if already active
    void this.offsetWidth; // Force reflow to re-trigger animation
    this.classList.add('clicked');

    setTimeout(() => {
      this.classList.remove('clicked'); // Optional cleanup
    }, 500); // Match the duration of your animation
  });
});