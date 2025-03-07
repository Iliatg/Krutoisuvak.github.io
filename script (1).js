// Плавная анимация для социальных логотипов и картинок
document.querySelectorAll(".social-icons img, .gallery img").forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.1)";
    });
    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
});
