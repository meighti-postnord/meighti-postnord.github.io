document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const hamburger = document.getElementById('hamburger');
  const closeBtn = document.getElementById('close-btn');

  function openMenu() {
    sidebar.classList.add('open');
  }
  function closeMenu() {
    sidebar.classList.remove('open');
  }
  function toggleMenu() {
    sidebar.classList.toggle('open');
  }

  // Hamburger toggles sidebar
  if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
  }

  // Close button closes sidebar
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Optionally close sidebar when clicking outside (desktop and mobile)
  document.addEventListener('click', function(e) {
    if (
      sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      e.target !== hamburger
    ) {
      sidebar.classList.remove('open');
    }
  });

  // Optional: Close sidebar on ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
});