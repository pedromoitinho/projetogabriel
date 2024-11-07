
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a');
    const loadingOverlay = document.getElementById('loadingOverlay');
  
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        if (link.href) {
          e.preventDefault();
          loadingOverlay.style.display = 'flex';
          
          setTimeout(() => {
            window.location.href = link.href;
          }, 1000);
        }
      });
    });
  });
