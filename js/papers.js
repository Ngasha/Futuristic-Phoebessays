// Paper Gallery System

// Paper Database
const paperDatabase = [
    { id: 1, title: "Neural Networks in Cognitive Psychology", category: "psychology", grade: "A+", university: "Stanford", pages: 15, icon: "🧠", preview: "📄" },
    { id: 2, title: "Strategic Business Intelligence Analysis", category: "business", grade: "A", university: "Harvard", pages: 8, icon: "📊", preview: "📊" },
    { id: 3, title: "Advanced Machine Learning Algorithms", category: "technology", grade: "A+", university: "MIT", pages: 120, icon: "💻", preview: "💻" },
    { id: 4, title: "Shakespearean Literature Analysis", category: "literature", grade: "A", university: "Oxford", pages: 12, icon: "📚", preview: "📚" },
    { id: 5, title: "Cardiovascular Disease Research", category: "medical", grade: "A+", university: "Johns Hopkins", pages: 45, icon: "🏥", preview: "🏥" },
    { id: 6, title: "Sustainable Engineering Solutions", category: "technology", grade: "A", university: "Caltech", pages: 28, icon: "⚙️", preview: "⚙️" },
    { id: 7, title: "Ethics in Modern Philosophy", category: "philosophy", grade: "A+", university: "Yale", pages: 10, icon: "🤔", preview: "🤔" },
    { id: 8, title: "Global Economic Trends Analysis", category: "business", grade: "A", university: "Chicago", pages: 18, icon: "💰", preview: "💰" },
    { id: 9, title: "Organic Chemistry Lab Report", category: "science", grade: "A+", university: "Berkeley", pages: 25, icon: "🧪", preview: "🧪" },
    { id: 10, title: "World War II Historical Analysis", category: "history", grade: "A", university: "Princeton", pages: 22, icon: "📜", preview: "📜" },
    { id: 11, title: "Renaissance Art Movement Study", category: "arts", grade: "A+", university: "Columbia", pages: 14, icon: "🎨", preview: "🎨" },
    { id: 12, title: "Social Media Impact on Society", category: "sociology", grade: "A", university: "NYU", pages: 16, icon: "👥", preview: "👥" },
    { id: 13, title: "Climate Change Environmental Study", category: "science", grade: "A+", university: "UCLA", pages: 35, icon: "🌱", preview: "🌱" },
    { id: 14, title: "Democratic Governance Analysis", category: "politics", grade: "A", university: "Georgetown", pages: 20, icon: "🏛️", preview: "🏛️" },
    { id: 15, title: "Cultural Anthropology Research", category: "anthropology", grade: "A+", university: "Brown", pages: 28, icon: "🗿", preview: "🗿" },
    { id: 16, title: "Quantum Physics Fundamentals", category: "science", grade: "A+", university: "Caltech", pages: 32, icon: "⚛️", preview: "⚛️" },
    { id: 17, title: "International Relations Theory", category: "politics", grade: "A", university: "Georgetown", pages: 24, icon: "🌍", preview: "🌍" },
    { id: 18, title: "Behavioral Economics Study", category: "business", grade: "A+", university: "Harvard", pages: 19, icon: "📈", preview: "📈" },
    { id: 19, title: "Neuroscience and Consciousness", category: "medical", grade: "A", university: "Johns Hopkins", pages: 38, icon: "🧠", preview: "🧠" },
    { id: 20, title: "Digital Marketing Strategies", category: "business", grade: "A+", university: "Wharton", pages: 21, icon: "📱", preview: "📱" }
];

function loadPapers(filter = 'all') {
    const grid = document.getElementById('papers-grid');
    const filteredPapers = filter === 'all' ? paperDatabase : paperDatabase.filter(paper => paper.category === filter);

    grid.innerHTML = '';

    filteredPapers.forEach((paper, index) => {
        const paperCard = document.createElement('div');
        paperCard.className = 'paper-card reveal';
        paperCard.style.animationDelay = `${index * 0.1}s`;

        paperCard.innerHTML = `
            <div class="p-6">
                <div class="paper-preview">
                    <span class="text-6xl">${paper.preview}</span>
                </div>
                
                <div class="space-y-4">
                    <div>
                        <h3 class="text-lg font-medium text-white mb-2 line-clamp-2">${paper.title}</h3>
                        <p class="text-sm text-gray-400 mono">${paper.university.toUpperCase()}</p>
                    </div>
                    
                    <div class="flex justify-between items-center">
                        <div class="flex items-center space-x-4">
                            <div class="text-center">
                                <div class="text-xl font-bold neon-text">${paper.grade}</div>
                                <div class="text-xs text-gray-400 mono">GRADE</div>
                            </div>
                            <div class="text-center">
                                <div class="text-xl font-bold text-blue-400">${paper.pages}</div>
                                <div class="text-xs text-gray-400 mono">PAGES</div>
                            </div>
                        </div>
                        
                        <div class="w-12 h-12 glass-neural rounded-xl flex items-center justify-center">
                            <span class="text-2xl">${paper.icon}</span>
                        </div>
                    </div>
                    
                    <button class="w-full holo-btn py-3 rounded-xl font-medium text-white" onclick="openPaper(${paper.id})">
                        <span class="relative z-10 mono text-sm">OPEN.DOCUMENT</span>
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(paperCard);

        // Trigger reveal animation
        setTimeout(() => {
            paperCard.classList.add('active');
        }, index * 100);
    });
}

function openPaper(paperId) {
    const paper = paperDatabase.find(p => p.id === paperId);
    if (paper) {
        // Simulate opening a document
        alert(`Opening: ${paper.title}\n\nThis would normally open the actual document file. For demo purposes, this shows the paper details.`);
    }
}

// Filter functionality
function initPaperFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Get filter value and load papers
            const filter = this.getAttribute('data-filter');
            loadPapers(filter);
        });
    });
}

function viewPaper() {
    const modal = document.getElementById('bubble-modal');
    modal.classList.remove('active');

    // Show paper gallery
    document.getElementById('papers').style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Scroll to top of papers section
    document.getElementById('papers').scrollIntoView({ behavior: 'smooth' });

    // Load papers
    loadPapers();
}

function closePaperGallery() {
    document.getElementById('papers').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Initialize paper system
document.addEventListener('DOMContentLoaded', function() {
    initPaperFilters();
});

