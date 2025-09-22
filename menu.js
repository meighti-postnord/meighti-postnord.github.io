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

  hamburger.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  // Optionally close menu when clicking outside (mobile UX)
  document.addEventListener('click', function(e) {
    if (sidebar.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        e.target !== hamburger) {
      closeMenu();
    }
  });
});