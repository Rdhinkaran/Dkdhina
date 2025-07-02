// Typing Animation
window.onload = function () {
  const text = document.querySelector(".typing");
  const roles = ["Editor...", "Photographer...", "B.E Student...", "Web Developer..."];
  let index = 0, charIndex = 0, deleting = false;

  function type() {
    if (!deleting && charIndex <= roles[index].length) {
      text.textContent = roles[index].slice(0, charIndex++);
    } else if (deleting && charIndex >= 0) {
      text.textContent = roles[index].slice(0, charIndex--);
    }

    if (charIndex === roles[index].length + 1) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }

    if (charIndex === 0 && deleting) {
      deleting = false;
      index = (index + 1) % roles.length;
    }

    setTimeout(type, deleting ? 50 : 100);
  }

  type();
};

// Flip Card
function flipCard(card) {
  card.classList.toggle("flipped");
}

window.addEventListener('scroll', () => {
  const section = document.querySelector('.contact-card');
  const rect = section.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    section.classList.add('animate');
  }
});
const cards = document.querySelectorAll('.animate-move');

window.addEventListener('scroll', () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.classList.add('visible');
    }
  });
});

