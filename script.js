// Кнопка "Наверх"
const toTopBtn = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    toTopBtn.style.display = 'block';
  } else {
    toTopBtn.style.display = 'none';
  }
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Анимация клика на SVG-иконку (меняет цвет)
const icons = document.querySelectorAll('img');
icons.forEach(icon => {
  icon.addEventListener('click', () => {
    icon.style.filter = 'hue-rotate(90deg)';
    setTimeout(() => (icon.style.filter = 'none'), 600);
  });
});
