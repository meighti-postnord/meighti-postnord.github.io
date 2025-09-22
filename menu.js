document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const closeBtn = document.getElementById('close-btn');

  function isMobile() {
    return window.innerWidth <= 700;
  }

  function openMenu() {
    sidebar.classList.add('open');
  }
  function closeMenu() {
    sidebar.classList.remove('open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      if (isMobile()) openMenu();
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Optionally close menu when clicking outside (mobile UX)
  document.addEventListener('click', function(e) {
    if (isMobile() && sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        e.target !== hamburger) {
      closeMenu();
    }
  });

  // Responsive: reset sidebar state on resize
  window.addEventListener('resize', function() {
    if (!isMobile()) {
      sidebar.classList.remove('open');
    }
  });
});