// Place your JavaScript code here// Blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Web Development",
        category: "Technology",
        date: "September 28, 2025",
        author: "John Doe",
        excerpt: "A beginner's guide to starting your journey in web development. Learn about HTML, CSS, and JavaScript basics.",
        content: "Web development is an exciting field that combines creativity with technical skills. Whether you're building a personal blog or a complex web application, understanding the fundamentals is crucial. HTML provides structure, CSS handles styling, and JavaScript adds interactivity. Start with simple projects and gradually increase complexity as you learn.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop"
    },
    {
        id: 2,
        title: "10 Tips for Better Work-Life Balance",
        category: "Lifestyle",
        date: "September 25, 2025",
        author: "John Doe",
        excerpt: "Practical strategies to maintain harmony between your professional and personal life in today's fast-paced world.",
        content: "Achieving work-life balance is essential for mental health and productivity. Set clear boundaries between work and personal time. Schedule regular breaks throughout your day. Make time for hobbies and relationships. Remember that balance looks different for everyone, so find what works for you. Don't be afraid to say no to commitments that don't align with your priorities.",
        image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop"
    },
    {
        id: 3,
        title: "Exploring the Streets of Tokyo",
        category: "Travel",
        date: "September 20, 2025",
        author: "John Doe",
        excerpt: "A journey through the vibrant neighborhoods and hidden gems of Japan's bustling capital city.",
        content: "Tokyo is a city of contrasts where ancient temples stand beside modern skyscrapers. From the electric energy of Shibuya crossing to the peaceful gardens of Meiji Shrine, every neighborhood offers something unique. Don't miss the tiny ramen shops tucked away in back alleys, or the stunning views from Tokyo Tower at night. The city's efficient public transportation makes it easy to explore.",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop"
    },
    {
        id: 4,
        title: "The Principles of Minimalist Design",
        category: "Design",
        date: "September 18, 2025",
        author: "John Doe",
        excerpt: "Understanding how less can be more in creating beautiful and functional designs that stand the test of time.",
        content: "Minimalist design isn't about removing everything—it's about keeping what matters. Focus on essential elements, use whitespace effectively, and choose a limited color palette. Every element should serve a purpose. Typography becomes more important when you have fewer decorative elements. The goal is clarity and functionality without unnecessary ornamentation.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop"
    },
    {
        id: 5,
        title: "Building Scalable APIs with Node.js",
        category: "Technology",
        date: "September 15, 2025",
        author: "John Doe",
        excerpt: "Best practices for creating robust and scalable RESTful APIs using Node.js and Express framework.",
        content: "Building APIs requires careful planning and architecture. Start with clear endpoint design following RESTful principles. Implement proper error handling and validation. Use middleware for authentication and logging. Consider implementing rate limiting and caching for better performance. Document your API thoroughly so other developers can easily integrate with it.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop"
    },
    {
        id: 6,
        title: "Morning Routines That Transform Your Day",
        category: "Lifestyle",
        date: "September 12, 2025",
        author: "John Doe",
        excerpt: "Discover powerful morning habits that successful people use to start their day with purpose and energy.",
        content: "How you start your morning sets the tone for the entire day. Wake up at a consistent time, even on weekends. Begin with hydration before coffee. Incorporate movement through yoga, stretching, or a quick workout. Practice mindfulness or meditation for mental clarity. Review your goals and priorities for the day. Eat a nutritious breakfast to fuel your body and mind.",
        image: "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=800&h=400&fit=crop"
    }
];

let currentFilter = 'all';

// Render blog posts
function renderPosts(filter = 'all') {
    const grid = document.getElementById('blogGrid');
    const filteredPosts = filter === 'all' 
        ? blogPosts 
        : blogPosts.filter(post => post.category === filter);

    grid.innerHTML = filteredPosts.map(post => `
        <div class="blog-card" onclick="openModal(${post.id})">
            <img src="${post.image}" alt="${post.title}">
            <div class="blog-content">
                <span class="blog-category">${post.category}</span>
                <h3 class="blog-title-card">${post.title}</h3>
                <p class="blog-meta">${post.date} • ${post.author}</p>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more" onclick="event.preventDefault()">Read More →</a>
            </div>
        </div>
    `).join('');
}

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.category;
        renderPosts(currentFilter);
    });
});

// Modal functionality
function openModal(postId) {
    const post = blogPosts.find(p => p.id === postId);
    if (!post) return;

    document.getElementById('modalImage').src = post.image;
    document.getElementById('modalCategory').textContent = post.category;
    document.getElementById('modalTitle').textContent = post.title;
    document.getElementById('modalMeta').textContent = `${post.date} • ${post.author}`;
    document.getElementById('modalContent').innerHTML = `<p>${post.content}</p>`;
    document.getElementById('postModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('postModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal on outside click
document.getElementById('postModal').addEventListener('click', (e) => {
    if (e.target.id === 'postModal') {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Initial render
renderPosts();