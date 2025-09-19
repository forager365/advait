(function() {
  const init = () => {
    const servicesMenuItems = document.querySelectorAll('.services-menu-item');
    const servicesSection = document.querySelector('.services-section');

    servicesMenuItems.forEach(menuItem => {
      menuItem.addEventListener('click', function(e) {
        e.preventDefault();
        if (servicesSection) {
          servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();