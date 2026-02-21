// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is in the viewport
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                
                // Optional: Stop observing once it has animated in
                // observer.unobserve(entry.target); 
            } else {
                // Remove the class if you want the animation to repeat when scrolling up and down
                entry.target.classList.remove('show');
            }
        });
    }, {
        // Trigger animation when 10% of the element is visible
        threshold: 0.1, 
        rootMargin: "0px 0px -50px 0px"
    });

    // Grab all elements with the class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    
    // Tell the observer to watch each hidden element
    hiddenElements.forEach((el) => observer.observe(el));
});
