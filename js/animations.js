// Additional Animations and Effects

// Glitch Effect
function addGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');

    glitchElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animation = 'glitch-skew 0.2s ease-in-out';
        });

        element.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
}

// PHOEBESSAYS Network Lines Animation
function createPHOEBESSAYSLines() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const line = document.createElement('div');
        line.className = 'PHOEBESSAYS-line';
        line.style.width = '100%';
        line.style.top = '50%';
        line.style.left = '0';
        line.style.position = 'absolute';
        line.style.zIndex = '-1';

        section.style.position = 'relative';
        section.appendChild(line);
    });
}

// Liquid Morphing Enhancement
function enhanceLiquidMorph() {
    const liquidElements = document.querySelectorAll('.liquid-morph');

    liquidElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.animationDuration = '2s';
        });

        element.addEventListener('mouseleave', function() {
            this.style.animationDuration = '8s';
        });
    });
}

// Typing Animation
function createTypingAnimation() {
    const typingElements = document.querySelectorAll('.typing-animation');

    typingElements.forEach(element => {
        const text = element.textContent;
        element.textContent = '';
        element.style.width = '0';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                element.style.width = ((i + 1) / text.length * 100) + '%';
                i++;
                setTimeout(typeWriter, 100);
            }
        };

        // Start typing animation when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(element);
    });
}

// Grid Pulse Animation
function addGridPulse() {
    const grid = document.querySelector('.holo-grid');
    if (grid) {
        grid.addEventListener('mouseenter', function() {
            this.style.animation = 'grid-pulse 1s ease-in-out';
        });

        grid.addEventListener('mouseleave', function() {
            this.style.animation = 'grid-move 20s linear infinite';
        });
    }
}

// Enhanced Hover Effects
function enhanceHoverEffects() {
    // Add hover effects to cards
    document.querySelectorAll('.card-3d').forEach(card => {
        card.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`;
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

// Floating Elements Animation
function animateFloatingElements() {
    const floatingElements = document.querySelectorAll('.float-element');

    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.5}s`;
        element.style.animationDuration = `${8 + index * 0.5}s`;
    });
}

// Particle System Enhancement
function enhanceParticleSystem() {
    const particlesContainer = document.getElementById('particles');

    // Add mouse interaction to particles
    particlesContainer.addEventListener('mousemove', function(e) {
        const particles = this.querySelectorAll('.particle');
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const distance = Math.sqrt(x * x + y * y);
            if (distance < 100) {
                particle.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.5)`;
                particle.style.opacity = '0.8';
            } else {
                particle.style.transform = '';
                particle.style.opacity = '';
            }
        });
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', function() {
    addGlitchEffect();
    createPHOEBESSAYSLines();
    enhanceLiquidMorph();
    createTypingAnimation();
    addGridPulse();
    enhanceHoverEffects();
    animateFloatingElements();
    enhanceParticleSystem();
});

// Performance optimization for animations
function optimizeAnimations() {
    // Reduce animation complexity on mobile
    if (window.innerWidth < 768) {
        document.querySelectorAll('.particle').forEach(particle => {
            particle.style.animationDuration = '4s';
        });

        document.querySelectorAll('.float-element').forEach(element => {
            element.style.animationDuration = '4s';
        });
    }
}

// Call optimization on resize
window.addEventListener('resize', optimizeAnimations);
window.addEventListener('load', optimizeAnimations);