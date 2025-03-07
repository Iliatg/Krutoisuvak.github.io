// Плавные анимации, например, при прокрутке страницы
document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll(".social-logo");
    socialLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.2)";
        });
        link.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
