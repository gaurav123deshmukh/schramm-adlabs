window.addEventListener('load', function() {
    // 1. Preloader
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
            // Start Typewriter only after preloader finishes
            typeWriter();
        }, 500); 
    }, 800);

    // 2. Active Link Highlighting
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    for (let i = 0; i < menuItem.length; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        }
    }

    // 3. Scroll Reveal Animation (Intersection Observer)
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100; // when to trigger

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    reveal(); // trigger once on load
});

// 4. Typewriter Effect for Hero Subtitle
const text = "Schramm Ad Labs is a premium digital marketing agency offering coherent and bespoke marketing services for brands ready to scale.";
let i = 0;
const speed = 30; // typing speed in milliseconds
const typeTarget = document.getElementById("typewriter-text");

function typeWriter() {
    if (typeTarget && i < text.length) {
        typeTarget.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}
