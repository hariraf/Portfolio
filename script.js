// ========== SMOOTH SCROLLING & NAVIGATION ========== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ========== MOBILE MENU TOGGLE ========== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// ========== NAVBAR SCROLL EFFECT ========== 
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.padding = '10px 0';
        navbar.style.boxShadow = '0 5px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.padding = '20px 0';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ========== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.about-card, .article-card, .project-card, .creative-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========== ACTIVE NAV LINK HIGHLIGHTING ========== 
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ========== PARALLAX EFFECT FOR HERO ========== 
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// ========== CURSOR TRAIL EFFECT (OPTIONAL) ========== 
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll('.circle');

if (circles.length === 0) {
    // Create cursor trail circles
    for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.className = 'circle';
        circle.style.cssText = `
            position: fixed;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: linear-gradient(135deg, #6366f1, #ec4899);
            pointer-events: none;
            opacity: 0;
            z-index: 9999;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(circle);
    }
}

const allCircles = document.querySelectorAll('.circle');

allCircles.forEach((circle, index) => {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    allCircles.forEach((circle, index) => {
        circle.style.left = x - 5 + 'px';
        circle.style.top = y - 5 + 'px';
        circle.style.opacity = (20 - index) / 20;
        circle.style.transform = `scale(${(20 - index) / 20})`;

        circle.x = x;
        circle.y = y;

        const nextCircle = allCircles[index + 1] || allCircles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    requestAnimationFrame(animateCircles);
}

animateCircles();

// ========== TYPING EFFECT FOR HERO SUBTITLE ========== 
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    setTimeout(typeWriter, 500);
}

// ========== CARD CLICK HANDLERS ========== 
document.querySelectorAll('.article-card, .project-card, .creative-item').forEach(card => {
    card.addEventListener('click', () => {
        // Add your navigation logic here
        console.log('Card clicked:', card.querySelector('h3').textContent);
        // Example: window.location.href = 'article-page.html';
    });
});

console.log('🚀 Portfolio loaded successfully!');