// Select all elements with the class "rise-on-scroll"
const elementsToAnimate = document.querySelectorAll('.rise-on-scroll');

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
}

// Function to trigger the animation on scroll
function animateOnScroll() {
    elementsToAnimate.forEach((element) => {
        if (isInViewport(element)) {
            element.classList.add('active');
        }
    });
}

// Event listener for scroll to animate elements
window.addEventListener('scroll', animateOnScroll);

// Trigger animations on initial load
animateOnScroll();

// Ensure the page starts at the top on refresh
window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});
