document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navDesktopCenterGroup = document.getElementById('nav-desktop-center-group');
    const navDesktopRightButtons = document.getElementById('nav-desktop-right-buttons');
    const navLinksMobile = document.getElementById('nav-links-mobile');
    const body = document.body;

    // Define the breakpoint for tablet/desktop layout (Tailwind's 'md' is 768px by default)
    const MD_BREAKPOINT = 768;

    // Function to set header visibility based on screen width
    const setHeaderVisibility = () => {
        if (window.innerWidth >= MD_BREAKPOINT) {
            // Desktop/Tablet view
            navDesktopCenterGroup.classList.remove('hidden');
            navDesktopCenterGroup.classList.add('flex');
            navDesktopRightButtons.classList.remove('hidden');
            navDesktopRightButtons.classList.add('flex');

            // Hide mobile menu if it was open
            navLinksMobile.classList.add('hidden');
            navLinksMobile.classList.remove('open');
            body.classList.remove('overflow-hidden'); // Re-enable scroll
        } else {
            // Mobile view
            navDesktopCenterGroup.classList.add('hidden');
            navDesktopCenterGroup.classList.remove('flex');
            navDesktopRightButtons.classList.add('hidden');
            navDesktopRightButtons.classList.remove('flex');

            // Ensure mobile menu is hidden initially or if resized from desktop
            if (!navLinksMobile.classList.contains('open')) {
                navLinksMobile.classList.add('hidden');
            }
        }
    };

    if (menuToggle && navLinksMobile && navDesktopCenterGroup && navDesktopRightButtons) {
        // Toggle mobile menu on click
        menuToggle.addEventListener('click', () => {
            navLinksMobile.classList.toggle('hidden');
            navLinksMobile.classList.toggle('open');
            body.classList.toggle('overflow-hidden');
        });

        // Close mobile menu when a link inside it is clicked
        navLinksMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is currently visible (i.e., not already hidden)
                if (!navLinksMobile.classList.contains('hidden')) {
                    navLinksMobile.classList.add('hidden');
                    navLinksMobile.classList.remove('open');
                    body.classList.remove('overflow-hidden');
                }
            });
        });

        // Handle screen resize
        window.addEventListener('resize', setHeaderVisibility);

        // Initial check on page load
        setHeaderVisibility();
    }
});

document.querySelectorAll('[data-hs-theme-click-value]').forEach(btn => {
  btn.addEventListener('click', function() {
    const html = document.documentElement;
    if (this.getAttribute('data-hs-theme-click-value') === 'dark') {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
});

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
} else if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.remove('dark');
}

document.querySelectorAll('[data-hs-theme-click-value]').forEach(btn => {
  btn.addEventListener('click', function() {
    const html = document.documentElement;
    if (this.getAttribute('data-hs-theme-click-value') === 'dark') {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  });
});

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark');
} else if (localStorage.getItem('theme') === 'light') {
  document.documentElement.classList.remove('dark');
}