document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('open');
        });
    }

   
    const navLinks = document.querySelectorAll('nav a');
    const mobileNavLinks = document.querySelectorAll('#mobile-menu a');

    const allLinks = [...navLinks, ...mobileNavLinks];

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - (mobileMenu.offsetHeight + 20), 
                    behavior: 'smooth'
                });

                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('open');
                }
            }
        });
    });

    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});
