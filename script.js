// Smooth scrolling for internal links, including the icon link to scroll to top
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === "#") {
            // Smooth scroll to top
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            // Smooth scroll to specific section
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('active'); // Toggles cross animation
    mobileNav.classList.toggle('active'); // Toggles dropdown menu
});
window.addEventListener('scroll', () => {
    const mobileNavLinks = document.querySelectorAll('#mobile-nav a');
    const scrollPosition = window.scrollY; // Current scroll position
    const triggerPoint = 600; // Adjust based on your page layout

    // Set contrasting text color based on scroll position
    if (scrollPosition > triggerPoint) {
        mobileNavLinks.forEach(link => link.style.color = '#333'); // Dark text color
    } else {
        mobileNavLinks.forEach(link => link.style.color = '#fff'); // Light text color
    }
});
window.addEventListener('scroll', () => {
    const mobileNavLinks = document.querySelectorAll('#mobile-nav a');
    const scrollPosition = window.scrollY; // Current scroll position
    const triggerPoint = 600; // Adjust based on your page layout

    // Set contrasting text color based on scroll position
    if (scrollPosition > triggerPoint) {
        mobileNavLinks.forEach(link => link.style.color = '#333'); // Dark text color
    } else {
        mobileNavLinks.forEach(link => link.style.color = '#fff'); // Light text color
    }
});
