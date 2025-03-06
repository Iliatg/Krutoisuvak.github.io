
// Скрипт для обработки формы подписки
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var responseMessage = document.getElementById('response-message');
    
    if (email) {
        // Отправка email (для демонстрации только)
        responseMessage.textContent = 'Спасибо за подписку! Мы отправим новости на: ' + email;
        responseMessage.style.color = 'green';
    } else {
        responseMessage.textContent = 'Пожалуйста, введите корректный email.';
        responseMessage.style.color = 'red';
    }
});
