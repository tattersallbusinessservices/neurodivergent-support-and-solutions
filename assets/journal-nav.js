(function () {
  function patch() {
    var found = false;

    // Remove "AI Tools" nav/footer links entirely
    document.querySelectorAll('a[href="/ai-tools"]').forEach(function (a) {
      found = true;
      var li = a.closest('li');
      (li || a).style.display = 'none';
    });

    // Rename "Resources" to "Neurodiversity Journal" and point it at /journal
    document.querySelectorAll('a[href="/resources"]').forEach(function (a) {
      found = true;
      a.textContent = 'Neurodiversity Journal';
      a.setAttribute('href', '/journal');
      // Force a real page load to /journal instead of the SPA router
      // (which doesn't know this route), by intercepting the click
      // before the app's own click handler runs.
      a.addEventListener(
        'click',
        function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          window.location.href = '/journal';
        },
        true
      );
    });

    return found;
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (patch()) return;
    var tries = 0;
    var interval = setInterval(function () {
      tries += 1;
      if (patch() || tries > 40) clearInterval(interval);
    }, 150);
  });
})();
