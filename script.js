// --- Mobile Menu Toggle ---
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('is-active');
}

// --- Tab Functionality for Education Section ---
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }
    const tablinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// --- Tab Functionality for Showcase Section ---
function openShowcaseTab(evt, tabName) {
    const showcaseContent = document.getElementsByClassName("showcase-content");
    for (let i = 0; i < showcaseContent.length; i++) {
        showcaseContent[i].classList.remove('active');
    }
    const showcaseTabs = document.getElementsByClassName("showcase-tab");
    for (let i = 0; i < showcaseTabs.length; i++) {
        showcaseTabs[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// --- Go to Top Button ---
const goToTopBtn = document.getElementById('goToTopBtn');
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        goToTopBtn.classList.add('show');
    } else {
        goToTopBtn.classList.remove('show');
    }
});

// ADDED THIS EVENT LISTENER
goToTopBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default anchor link behavior
    window.scrollTo({
        top: 0, // Scroll to the absolute top of the page
        behavior: 'smooth' // Use a smooth scrolling animation
    });
});


// --- Scroll Animations ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));

// --- Initial Setup on DOM Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Set the default active tabs
    if (document.querySelector('.tab-link')) {
        document.querySelector('.tab-link').classList.add('active');
        document.getElementById('Masters').classList.add('active');
    }
    
    if (document.querySelector('.showcase-tab')) {
        document.querySelector('.showcase-tab').classList.add('active');
        document.getElementById('showcaseProjects').classList.add('active');
    }

    // Initialize Particles.js
    // Initialize tsParticles (AI/ML Style)
if (typeof tsParticles !== "undefined") {
    tsParticles.load("particles-js", {
        background: {
            color: "transparent"
        },
        particles: {
            number: {
                value: 70,
                density: { enable: true, area: 800 }
            },
            color: {
                value: ["#22c55e", "#06b6d4"] // AI neon colors
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5
            },
            size: {
                value: { min: 1, max: 3 }
            },
            links: {
                enable: true,
                distance: 130,
                color: "#22c55e",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.8, // slower = premium AI feel
                random: true,
                outModes: { default: "out" }
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "connect"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                }
            },
            modes: {
                connect: {
                    distance: 140,
                    links: { opacity: 0.8 }
                },
                push: {
                    quantity: 4
                }
            }
        },
        detectRetina: true
    });
}
});