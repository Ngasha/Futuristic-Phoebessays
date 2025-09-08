// Main JavaScript for Phoebessays Website

// Elegant Brand Cursor
const cursor = document.getElementById('cursor');
let isMoving = false;

document.addEventListener('mousemove', (e) => {
    if (!isMoving) {
        requestAnimationFrame(() => {
            cursor.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
            isMoving = false;
        });
        isMoving = true;
    }
});

// Cursor hover effects
document.querySelectorAll('a, button, .bubble-success, .bubble-mini').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

document.addEventListener('mousedown', () => cursor.classList.add('click'));
document.addEventListener('mouseup', () => cursor.classList.remove('click'));

// Optimized Particle System
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const maxParticles = 15; // Reduced for performance
    let particleCount = 0;

    const createParticle = () => {
        if (particleCount >= maxParticles) return;

        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 2 + 6) + 's';

        particlesContainer.appendChild(particle);
        particleCount++;

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
                particleCount--;
            }
        }, 8000);
    };

    setInterval(createParticle, 1200); // Reduced frequency
}

// Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;

        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Order button functionality
document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', function() {
        const originalText = this.innerHTML;
        this.innerHTML = '<span class="relative z-10 mono">PROCESSING.ORDER...</span>';
        this.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)';
        this.style.borderColor = 'rgba(34, 197, 94, 0.8)';

        setTimeout(() => {
            this.innerHTML = '<span class="relative z-10 mono">ORDER.CONFIRMED ✓</span>';
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
                this.style.borderColor = '';
            }, 2000);
        }, 1500);
    });
});

// Scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Trigger counter animation when hero section is visible
            if (entry.target.querySelector('.counter')) {
                animateCounters();
            }
        }
    });
});

document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
});

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.float-element');

    parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Initialize effects
createParticles();

// Simplified hover effects
document.querySelectorAll('.card-3d').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// Add loading animation to buttons
document.querySelectorAll('.holo-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');

            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.3)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = (e.clientX - this.offsetLeft - 25) + 'px';
            ripple.style.top = (e.clientY - this.offsetTop - 25) + 'px';
            ripple.style.width = ripple.style.height = '50px';

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
                this.classList.remove('loading');
            }, 600);
        }
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

