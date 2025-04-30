document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
   

    this.classList.remove('clicked'); /
    void this.offsetWidth; // 
    this.classList.add('clicked');

    setTimeout(() => {
      this.classList.remove('clicked'); 
    }, 500); 
  });
});