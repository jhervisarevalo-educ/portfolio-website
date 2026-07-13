(() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function isDark() {
    return document.documentElement.classList.contains('dark');
  }

  // ── Dark / Light Mode Toggle ──
  const themeToggle = document.getElementById('theme-toggle');
  function applyTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
  themeToggle?.addEventListener('click', () => {
    applyTheme(!document.documentElement.classList.contains('dark'));
  });

  // ── Scroll Reveal (Intersection Observer) ──
  if (!prefersReducedMotion) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => {
      el.classList.add('visible');
    });
  }

  // ── Active Nav Link Tracking ──
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const activeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const dark = isDark();
          navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add(dark ? 'text-white' : 'text-slate-900');
              link.classList.remove(dark ? 'text-slate-400' : 'text-slate-500');
            } else {
              link.classList.remove(dark ? 'text-white' : 'text-slate-900');
              link.classList.add(dark ? 'text-slate-400' : 'text-slate-500');
            }
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
  );

  sections.forEach((section) => activeObserver.observe(section));

  // ── Typing Effect ──
  const typingEl = document.getElementById('typing-text');
  if (typingEl) {
    const phrases = [
      'Mobile App Developer',
      'BSCS Student',
      'Flutter Enthusiast',
      'Aspiring Creator',
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const TYPING_SPEED = 80;
    const DELETING_SPEED = 50;
    const PAUSE_BEFORE_DELETE = 2000;
    const PAUSE_BEFORE_TYPE = 500;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typingEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
      }

      let delay = isDeleting ? DELETING_SPEED : TYPING_SPEED;

      if (!isDeleting && charIndex === currentPhrase.length) {
        delay = PAUSE_BEFORE_DELETE;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        delay = PAUSE_BEFORE_TYPE;
      }

      setTimeout(type, delay);
    }

    setTimeout(type, 1000);
  }

  // ── Starfield Canvas ──
  const canvas = document.getElementById('starfield');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      let stars = [];
      let animId;

      function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initStars();
      }

      function initStars() {
        stars = [];
        const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 200);
        for (let i = 0; i < count; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 0.3 + 0.05,
            opacity: Math.random() * 0.8 + 0.2,
          });
        }
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const particleColor = isDark() ? '255, 255, 255' : '30, 41, 59';
        stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(' + particleColor + ', ' + star.opacity + ')';
          ctx.fill();

          star.y -= star.speed;
          if (star.y < -star.r) {
            star.y = canvas.height + star.r;
            star.x = Math.random() * canvas.width;
          }
        });
        animId = requestAnimationFrame(draw);
      }

      if (prefersReducedMotion) {
        resize();
        const particleColor = isDark() ? '255, 255, 255' : '30, 41, 59';
        stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(' + particleColor + ', ' + star.opacity + ')';
          ctx.fill();
        });
      } else {
        resize();
        draw();
      }

      window.addEventListener('resize', resize);
    }
  }

  // ── Navbar scroll effect ──
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'shadow-black/20');
      } else {
        navbar.classList.remove('shadow-lg', 'shadow-black/20');
      }
    });
  }
})();
