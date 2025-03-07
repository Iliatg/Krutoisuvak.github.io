// Слайдер
let currentIndex = 0;
const items = document.querySelectorAll('.slider-item');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function showSlide(index) {
    items.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

// Таймер
const countdown = document.getElementById('timer');
const eventDate = new Date('2025-12-31T00:00:00');

function updateTimer() {
    const now = new Date();
    const remainingTime = eventDate - now;
    
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    
    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateTimer, 1000);

// Модальное окно
const contactBtn = document.getElementById('contact-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close');

contactBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display =
