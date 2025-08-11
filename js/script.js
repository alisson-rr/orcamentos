document.addEventListener('DOMContentLoaded', () => {
    initLucideIcons();
    initSmoothScroll();
    populateContent();
    initTestimonialCarousel();
});

function initLucideIcons() {
    lucide.createIcons();
}

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function populateContent() {
    populateMentorCredentials();
    populateHowItWorks();
    populateBenefits();
    populateBonuses();
    populateBonusExtras();
    populateTestimonials();
}

function populateMentorCredentials() {
    const container = document.getElementById('mentor-credentials');
    if (!container) return;
    const list = mentorCredentials.map(item => `
        <li class="flex items-start gap-3">
            <i data-lucide="${item.icon}" class="w-6 h-6 text-primary_color mt-1 flex-shrink-0"></i>
            <span class="text-gray-700">${item.text}</span>
        </li>
    `).join('');
    container.innerHTML = list;
    lucide.createIcons();
}

function populateHowItWorks() {
    const container = document.getElementById('como-funciona-grid');
    if (!container) return;
    const cards = howItWorks.map(item => `
        <div class="how-it-works-card bg-white p-6 rounded-xl shadow-lg text-center">
            <div class="flex items-center justify-center w-16 h-16 mx-auto bg-primary_color/10 rounded-full">
                <i data-lucide="${item.icon}" class="w-8 h-8 text-primary_color"></i>
            </div>
            <h3 class="font-heading text-xl font-bold mt-5">${item.title}</h3>
            <p class="text-gray-600 mt-2 text-sm">${item.description}</p>
        </div>
    `).join('');
    container.innerHTML = cards;
    lucide.createIcons();
}

function populateBenefits() {
    const container = document.getElementById('benefits-grid');
    if (!container) return;
    const cards = benefits.map(benefit => `
        <div class="benefit-card bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div class="flex items-center gap-4">
                <i data-lucide="${benefit.icon}" class="w-8 h-8 text-gradient"></i>
                <h3 class="font-heading text-lg font-bold">${benefit.title}</h3>
            </div>
            <p class="text-gray-600 mt-4 text-sm">${benefit.description}</p>
        </div>
    `).join('');
    container.innerHTML = cards;
    lucide.createIcons();
}

function populateBonuses() {
    const bonusContainer = document.getElementById('bonus-grid');
    if (bonusContainer) {
        const bonusCards = bonuses.map(bonus => `
            <div class="bonus-card bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md">
                <i data-lucide="${bonus.icon}" class="w-10 h-10 text-primary_color mb-4"></i>
                <h3 class="font-heading text-xl font-bold">${bonus.title}</h3>
                <p class="text-gray-300 mt-2 text-sm">${bonus.description}</p>
            </div>
        `).join('');
        bonusContainer.innerHTML = bonusCards;
    }
    lucide.createIcons();
}

function populateBonusExtras() {
    const bonusExtrasContainer = document.getElementById('bonus-extras-grid');
    if (bonusExtrasContainer) {
        const bonusExtrasCards = bonusExtras.map(bonus => `
            <div class="bonus-card bg-white/10 p-6 rounded-xl border border-white/20 backdrop-blur-md">
                <i data-lucide="${bonus.icon}" class="w-10 h-10 text-primary_color mb-4"></i>
                <h3 class="font-heading text-lg font-bold">${bonus.title}</h3>
                <p class="text-gray-300 mt-2 text-xs">${bonus.description}</p>
            </div>
        `).join('');
        bonusExtrasContainer.innerHTML = bonusExtrasCards;
    }
    lucide.createIcons();
}

function populateTestimonials() {
    const container = document.getElementById('testimonial-carousel');
    if (!container) return;
    const slides = testimonials.map(t => `
        <div class="testimonial-slide">
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <div class="relative cursor-pointer video-thumbnail" data-video-id="${t.videoId}">
                    <img src="https://i.ytimg.com/vi/${t.videoId}/hqdefault.jpg" alt="Thumbnail do depoimento" class="w-full h-auto">
                    <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <i data-lucide="play-circle" class="w-16 h-16 text-white/80"></i>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    container.innerHTML = slides;
    
    container.querySelectorAll('.video-thumbnail').forEach(thumb => {
        thumb.addEventListener('click', (e) => {
            const videoId = e.currentTarget.dataset.videoId;
            const iframe = document.createElement('iframe');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${videoId}?autoplay=1`);
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
            iframe.setAttribute('allowfullscreen', '');
            iframe.className = 'w-full aspect-video';
            e.currentTarget.replaceWith(iframe);
        });
    });

    lucide.createIcons();
}

function initTestimonialCarousel() {
    const carousel = document.getElementById('testimonial-carousel');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    
    if (!carousel || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const slides = carousel.querySelectorAll('.testimonial-slide');
    const totalSlides = slides.length;

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextBtn.addEventListener('click', () => {
        const slidesInView = Math.round(carousel.parentElement.offsetWidth / slides[0].offsetWidth);
        if (currentIndex < totalSlides - slidesInView) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    window.addEventListener('resize', updateCarousel);
}

