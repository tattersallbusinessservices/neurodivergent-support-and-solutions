document.addEventListener('DOMContentLoaded', function() {
  // Wait a bit for React to render
  setTimeout(function() {
    const header = document.querySelector('header');
    if (!header) return;

    const logoSection = header.querySelector('.bg-gradient-to-r');
    const navSection = header.querySelector('.border-b.border-border');

    if (logoSection && navSection) {
      // Get the nav element
      const nav = navSection.querySelector('nav');
      if (nav) {
        // Move nav into the logo section
        const container = logoSection.querySelector('.container');
        if (container) {
          container.appendChild(nav);
          // Remove the now-empty nav section
          navSection.style.display = 'none';
        }
      }
    }
  }, 100);
});
