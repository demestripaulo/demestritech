(function () {
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      let delay = 0;
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => entry.target.classList.add('in'), delay);
          delay += 90;
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  const cdBar = document.getElementById('cdBar');
  const cdNum = document.getElementById('cdNum');
  const btnBr = document.getElementById('btn-br');
  const btnUs = document.getElementById('btn-us');
  if (cdBar && cdNum && btnBr && btnUs) {
    const lang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    const isBR = lang.startsWith('pt');
    const targetHref = isBR ? './br-index.html' : './us-index.html';
    const targetBtn = isBR ? btnBr : btnUs;
    targetBtn.classList.add('auto-target');

    const total = 5000;
    const interval = 50;
    let elapsed = 0;
    const timer = window.setInterval(() => {
      elapsed += interval;
      cdBar.style.width = Math.max(0, 100 - (elapsed / total * 100)) + '%';
      cdNum.textContent = Math.ceil((total - elapsed) / 1000);
      if (elapsed >= total) {
        window.clearInterval(timer);
        window.location.href = targetHref;
      }
    }, interval);

    document.querySelectorAll('.lang-btn').forEach((button) => {
      button.addEventListener('click', () => window.clearInterval(timer));
    });

    const particles = document.getElementById('particles');
    if (particles) {
      for (let i = 0; i < 22; i += 1) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const left = Math.random() * 100;
        const bottom = Math.random() * -10;
        const dx = (Math.random() - 0.5) * 80;
        const duration = 8 + Math.random() * 14;
        const delay = Math.random() * 10;
        const size = 1 + Math.random() * 2;
        particle.style.left = left + '%';
        particle.style.bottom = bottom + '%';
        particle.style.setProperty('--dx', dx + 'px');
        particle.style.animationDuration = duration + 's';
        particle.style.animationDelay = delay + 's';
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particles.appendChild(particle);
      }
    }
  }
}());
