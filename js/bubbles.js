// Bubble System for Portfolio Section

// Enhanced Bubble System with Dynamic Creation
const bubbleData = [
    { content: "Psychology Research", grade: "A+", university: "Stanford", pages: "15", citations: "48", delivery: "24H", icon: "🧠", category: "psychology", size: 180 },
    { content: "Business Strategy", grade: "A", university: "Harvard", pages: "8", citations: "25", delivery: "12H", icon: "📊", category: "business", size: 220 },
    { content: "Computer Science Thesis", grade: "A+", university: "MIT", pages: "120", citations: "200", delivery: "7D", icon: "💻", category: "technology", size: 250 },
    { content: "Literature Analysis", grade: "A", university: "Oxford", pages: "12", citations: "35", delivery: "18H", icon: "📚", category: "literature", size: 160 },
    { content: "Medical Research", grade: "A+", university: "Johns Hopkins", pages: "45", citations: "89", delivery: "3D", icon: "🏥", category: "medical", size: 200 },
    { content: "Engineering Project", grade: "A", university: "Caltech", pages: "28", citations: "67", delivery: "36H", icon: "⚙️", category: "technology", size: 190 },
    { content: "Philosophy Essay", grade: "A+", university: "Yale", pages: "10", citations: "22", delivery: "16H", icon: "🤔", category: "philosophy", size: 170 },
    { content: "Economics Analysis", grade: "A", university: "Chicago", pages: "18", citations: "41", delivery: "20H", icon: "💰", category: "business", size: 185 },
    { content: "Chemistry Lab Report", grade: "A+", university: "Berkeley", pages: "25", citations: "55", delivery: "30H", icon: "🧪", category: "science", size: 175 },
    { content: "History Research", grade: "A", university: "Princeton", pages: "22", citations: "78", delivery: "48H", icon: "📜", category: "history", size: 165 },
    { content: "Art History Essay", grade: "A+", university: "Columbia", pages: "14", citations: "33", delivery: "22H", icon: "🎨", category: "arts", size: 155 },
    { content: "Sociology Study", grade: "A", university: "NYU", pages: "16", citations: "42", delivery: "26H", icon: "👥", category: "sociology", size: 180 },
    { content: "Environmental Science", grade: "A+", university: "UCLA", pages: "35", citations: "95", delivery: "4D", icon: "🌱", category: "science", size: 195 },
    { content: "Political Science", grade: "A", university: "Georgetown", pages: "20", citations: "58", delivery: "32H", icon: "🏛️", category: "politics", size: 170 },
    { content: "Anthropology Research", grade: "A+", university: "Brown", pages: "28", citations: "71", delivery: "40H", icon: "🗿", category: "anthropology", size: 160 },
    // Mini bubbles
    { content: "Quick Essay", grade: "A+", university: "Various", pages: "5", citations: "12", delivery: "6H", icon: "📝", category: "mini", size: 80 },
    { content: "Lab Report", grade: "A", university: "Various", pages: "8", citations: "18", delivery: "8H", icon: "🔬", category: "mini", size: 70 },
    { content: "Case Study", grade: "A+", university: "Various", pages: "6", citations: "15", delivery: "10H", icon: "📋", category: "mini", size: 75 },
    { content: "Book Review", grade: "A", university: "Various", pages: "4", citations: "8", delivery: "4H", icon: "📖", category: "mini", size: 65 },
    { content: "Reflection Paper", grade: "A+", university: "Various", pages: "3", citations: "5", delivery: "3H", icon: "💭", category: "mini", size: 60 }
];

let currentBubbleData = null;

function createBubbles() {
    const container = document.getElementById('bubble-container');

    bubbleData.forEach((data, index) => {
                const bubble = document.createElement('div');
                bubble.className = data.size < 100 ? 'bubble-mini' : 'bubble-success';
                bubble.style.width = data.size + 'px';
                bubble.style.height = data.size + 'px';
                bubble.style.left = Math.random() * (window.innerWidth - data.size) + 'px';
                bubble.style.animationDelay = `-${Math.random() * 15}s`;
                bubble.style.animationDuration = `${12 + Math.random() * 6}s`;

                // Store data attributes
                Object.keys(data).forEach(key => {
                    bubble.setAttribute(`data-${key}`, data[key]);
                });

                bubble.innerHTML = `
            <div class="bubble-inner">
                <div class="bubble-icon ${data.size < 100 ? 'text-sm' : ''}">${data.icon}</div>
                <div class="bubble-title ${data.size < 100 ? 'text-xs' : ''}">${data.content.split(' ')[0]}</div>
                <div class="bubble-grade ${data.size < 100 ? 'text-xs' : ''}">${data.grade}</div>
                ${data.size >= 100 ? `<div class="bubble-uni">${data.university}</div>` : ''}
            </div>
        `;
        
        // Add click event
        bubble.addEventListener('click', function() {
            currentBubbleData = data;
            showBubbleModal(data);
        });
        
        container.appendChild(bubble);
    });
}

function showBubbleModal(data) {
    const modal = document.getElementById('bubble-modal');
    
    // Update modal content
    document.getElementById('modal-icon').textContent = data.icon;
    document.getElementById('modal-title').textContent = data.content;
    document.getElementById('modal-university').textContent = data.university + ' University';
    document.getElementById('modal-grade').textContent = data.grade;
    document.getElementById('modal-pages').textContent = data.pages;
    document.getElementById('modal-citations').textContent = data.citations;
    document.getElementById('modal-delivery').textContent = data.delivery;
    
    // Show modal
    modal.classList.add('active');
    
    // Add click outside to close
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeBubbleModal();
        }
    });
}

function closeBubbleModal() {
    const modal = document.getElementById('bubble-modal');
    modal.classList.remove('active');
}

// Bubble physics simulation
function animateBubbles() {
    const bubbles = document.querySelectorAll('.bubble-success, .bubble-mini');
    
    bubbles.forEach((bubble, index) => {
        // Add random movement variations
        const randomDelay = Math.random() * 2;
        const randomDuration = 6 + Math.random() * 4;
        
        bubble.style.animationDelay = `-${randomDelay}s`;
        bubble.style.animationDuration = `${randomDuration}s`;
        
        // Add mouse interaction
        bubble.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.15) translateY(-15px)';
        });
        
        bubble.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
            this.style.transform = '';
        });
    });
}

// Initialize bubble system
document.addEventListener('DOMContentLoaded', function() {
    createBubbles();
    animateBubbles();
});