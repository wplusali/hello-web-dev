document.addEventListener('DOMContentLoaded', function() {
    var navToggle = document.querySelector('.nav-toggle');
    var navClose = document.querySelector('.nav-close');
    var navMenu = document.querySelector('nav ul');
    var mobileBreakpoint = 600; // Same as in your CSS media query


    // Function to toggle menu display
    function toggleMenu() {
        var isMenuVisible = navMenu.style.display === 'block';
        navMenu.style.display = isMenuVisible ? 'none' : 'block';
        navClose.style.display = isMenuVisible ? 'none' : 'block';
    }

    // Toggle button click event
    navToggle.addEventListener('click', toggleMenu);

    // Close button click event
    navClose.addEventListener('click', toggleMenu);

    // Reset menu style on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > mobileBreakpoint) {
        navMenu.style.display = ''; // Reset inline style
        navClose.style.display = 'none'; // Ensure close button is hidden
        }
    });

    // Add click event for submenu toggle on small screens
    document.querySelectorAll('nav ul li > a').forEach(function(menuItem) {
        menuItem.addEventListener('click', function(event) {
            var submenu = this.nextElementSibling;
            if (submenu && submenu.tagName === 'UL') {
                event.preventDefault(); // Prevent default link behavior
                submenu.classList.toggle('submenu-open'); // Toggle the submenu
            }
        });
    });
});