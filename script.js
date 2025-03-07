// Анимация появления элементов
document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".animate");
    elements.forEach(el => {
        el.classList.add("visible");
    });
});

// Таймер обратного отсчета
function startCountdown() {
    let eventDate = new Date("2025-04-01T00:00:00").getTime();
    setInterval(function () {
        let now = new Date().getTime();
        let diff = eventDate - now;
        if (diff < 0) {
            document.getElementById("timer").innerHTML = "Скоро новый релиз!";
            return;
        }
        let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        let minutes = Math.floor((diff / (1000 * 60)) % 60);
        let seconds = Math.floor((diff / 1000) % 60);
        document.getElementById("timer").innerHTML = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}
startCountdown();

// Форма подписки
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let responseMessage = document.getElementById('response-message');
    if (email) {
        responseMessage.textContent = 'Спасибо за подписку!';
        responseMessage.style.color = 'green';
    }
});

// Форма обратной связи
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let message = document.getElementById('message').value;
    let response = document.getElementById('contact-response');
    if (name && message) {
        response.textContent = `Спасибо, ${name}, мы получили твое сообщение!`;
        response.style.color = 'green';
    }
});
