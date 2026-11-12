/* ==========================================================================
   Noor (NoorSoul) — Static Website Interactive Scripts
   Zero external dependencies · Fast & Accessible
   ========================================================================== */

(function () {
  'use strict';

  /* ---------- Mobile Navigation Drawer ---------- */
  const menuBtn = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      const isOpen = mobileNav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
    });
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Live Abjad Mini-Preview in Hero Phone Mockup ---------- */
  const TM = {
    a: 1, b: 2, c: 8, d: 4, e: 70, f: 80, g: 1000, h: 5, i: 10, j: 3,
    k: 20, l: 30, m: 40, n: 50, o: 6, p: 80, q: 100, r: 200, s: 90,
    t: 9, u: 6, v: 6, w: 6, x: 300, y: 10, z: 7
  };
  const EL = {
    1: 'Fire', 2: 'Earth', 3: 'Water', 4: 'Fire', 5: 'Air', 6: 'Air',
    7: 'Water', 8: 'Earth', 9: 'Earth', 10: 'Earth', 20: 'Fire', 30: 'Air',
    40: 'Water', 50: 'Fire', 60: 'Water', 70: 'Water', 80: 'Fire', 90: 'Water',
    100: 'Fire', 200: 'Water', 300: 'Fire', 400: 'Air', 500: 'Air', 600: 'Water',
    700: 'Fire', 800: 'Earth', 900: 'Earth', 1000: 'Water'
  };
  const DV = {
    1: 'Al-Awwal', 2: 'Al-Bari', 3: 'Al-Jalil', 4: 'Al-Dayyan', 5: 'Al-Hadi',
    6: 'Al-Wali', 7: 'Al-Zahir', 8: 'Al-Hakim', 9: 'Al-Tayyib', 10: 'Al-Wadud',
    20: 'Al-Kabir', 30: 'Al-Latif', 40: 'Al-Mumin', 50: 'Al-Nur', 60: 'Al-Sami',
    70: 'Al-Alim', 80: 'Al-Fattah', 90: 'Al-Sabur', 100: 'Al-Qadir', 200: 'Al-Rahman',
    300: 'Al-Shakur', 400: 'Al-Tawwab', 600: 'Al-Khaliq', 1000: 'Al-Ghani'
  };
  const DM = {
    1: 'The First', 2: 'The Originator', 3: 'The Majestic', 4: 'The Judge', 5: 'The Guide',
    6: 'The Protector', 7: 'The Manifest', 8: 'The All-Wise', 9: 'The Pure', 10: 'The Loving',
    20: 'The Great', 30: 'The Subtle', 40: 'The Guardian', 50: 'The Light', 60: 'The All-Hearing',
    70: 'The All-Knowing', 80: 'The Opener', 90: 'The Patient', 100: 'The All-Powerful',
    200: 'The Most Merciful', 300: 'The Grateful', 400: 'The Relenting', 600: 'The Creator',
    1000: 'The Self-Sufficient'
  };
  const CRYSTAL = {
    Fire: 'Ruby · Garnet',
    Water: 'Clear Quartz · Rose Quartz',
    Air: 'Amethyst · Lapis Lazuli',
    Earth: 'Citrine · Emerald'
  };
  const DHIKR = {
    Fire: 'Ya Nur · ×65',
    Water: 'Ya Shafi · ×127',
    Air: 'Ya Latif · ×133',
    Earth: 'Ya Hakim · ×8'
  };
  const ELEM_STYLE = {
    Fire: { bg: 'rgba(232, 120, 48, 0.16)', color: '#ff9b59', border: 'rgba(232, 120, 48, 0.4)' },
    Water: { bg: 'rgba(90, 154, 212, 0.16)', color: '#7cc0ff', border: 'rgba(90, 154, 212, 0.4)' },
    Air: { bg: 'rgba(46, 168, 126, 0.16)', color: '#5ee6b5', border: 'rgba(46, 168, 126, 0.4)' },
    Earth: { bg: 'rgba(201, 168, 76, 0.16)', color: '#e8cf82', border: 'rgba(201, 168, 76, 0.4)' }
  };

  const abjadInput = document.getElementById('abjad-preview-input');
  const abjadBtn = document.getElementById('abjad-preview-btn');

  function updateAbjadPreview(rawName) {
    const clean = (rawName || '').trim();
    if (!clean) return;
    const letters = [...clean.toLowerCase()].map(function (ch) { return TM[ch]; }).filter(Boolean);
    if (!letters.length) return;

    const total = letters.reduce(function (a, b) { return a + b; }, 0);
    const dom = letters.reduce(function (a, b) { return a > b ? a : b; });
    const elem = EL[dom] || 'Water';
    const divine = DV[dom] || 'Al-Sabur';
    const divineMean = DM[dom] || 'The Patient';
    const reduced = ((total - 1) % 9) + 1;
    const wafq = Math.floor(total / 3);
    const st = ELEM_STYLE[elem] || ELEM_STYLE.Water;

    const elName = document.getElementById('pv-name');
    const elTotal = document.getElementById('pv-total');
    const elElem = document.getElementById('pv-elem');
    const elDivine = document.getElementById('pv-divine');
    const elCrystal = document.getElementById('pv-crystal');
    const elDhikr = document.getElementById('pv-dhikr');
    const elWafq = document.getElementById('pv-wafq');

    if (elName) elName.textContent = clean;
    if (elTotal) elTotal.textContent = String(total);
    if (elElem) {
      elElem.textContent = elem + ' Element';
      elElem.style.background = st.bg;
      elElem.style.color = st.color;
      elElem.style.borderColor = st.border;
    }
    if (elDivine) elDivine.textContent = divine + ' (' + divineMean + ')';
    if (elCrystal) elCrystal.textContent = CRYSTAL[elem] || 'Clear Quartz';
    if (elDhikr) elDhikr.textContent = DHIKR[elem] || 'Ya Shafi · ×127';
    if (elWafq) elWafq.textContent = 'Reduced ' + reduced + ' · Wafq ' + wafq;
  }

  if (abjadBtn && abjadInput) {
    abjadBtn.addEventListener('click', function () {
      updateAbjadPreview(abjadInput.value);
    });
    abjadInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        updateAbjadPreview(abjadInput.value);
      }
    });
    document.querySelectorAll('.qname-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const sample = btn.getAttribute('data-name') || 'Faisal';
        abjadInput.value = sample;
        updateAbjadPreview(sample);
      });
    });
  }

  /* ---------- FAQ Accordion ---------- */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq-item');
      const answer = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('open');

      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        if (openItem !== item) {
          openItem.classList.remove('open');
          openItem.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
          openItem.querySelector('.faq-a').style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      } else {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Download App Modal & Early Access Waitlist ---------- */
  const modal = document.getElementById('download-modal');
  const modalPlatform = document.getElementById('modal-platform-label');
  const modalClose = document.getElementById('modal-close');
  const notifyForm = document.getElementById('waitlist-form');
  const notifyStatus = document.getElementById('waitlist-status');

  function openDownloadModal(platform) {
    if (!modal) return;
    if (modalPlatform) {
      modalPlatform.textContent = platform || 'iOS & Android';
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeDownloadModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('[data-download-trigger]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      openDownloadModal(el.getAttribute('data-download-trigger'));
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeDownloadModal);
  }
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeDownloadModal();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeDownloadModal();
    });
  }

  if (notifyForm && notifyStatus) {
    notifyForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const emailInput = document.getElementById('waitlist-email');
      const email = emailInput ? emailInput.value.trim() : '';
      if (!email || email.indexOf('@') === -1) {
        notifyStatus.className = 'form-status error';
        notifyStatus.textContent = 'Please enter a valid email address to receive your direct app download link.';
        return;
      }
      try {
        const list = JSON.parse(localStorage.getItem('noor_waitlist_v1') || '[]');
        if (!list.includes(email)) list.push(email);
        localStorage.setItem('noor_waitlist_v1', JSON.stringify(list));
      } catch (err) {
        // Ignore storage restrictions
      }
      notifyStatus.className = 'form-status success';
      notifyStatus.textContent = 'JazakAllahu Khayran! Your download link & early-access invitation for ' + email + ' has been queued.';
      notifyForm.reset();
    });
  }

  /* ---------- Contact Form Handler ---------- */
  const contactForm = document.getElementById('contact-form');
  const contactStatus = document.getElementById('contact-status');
  if (contactForm && contactStatus) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (document.getElementById('c-name')?.value || '').trim();
      const email = (document.getElementById('c-email')?.value || '').trim();
      const topic = (document.getElementById('c-topic')?.value || 'App Support').trim();
      const message = (document.getElementById('c-message')?.value || '').trim();

      if (!name || !email || email.indexOf('@') === -1 || message.length < 10) {
        contactStatus.className = 'form-status error';
        contactStatus.textContent = 'Please enter your name, a valid email address, and a message (at least 10 characters).';
        return;
      }

      const subject = encodeURIComponent('[Noor Website - ' + topic + '] Message from ' + name);
      const body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nTopic: ' + topic + '\n\nMessage:\n' + message);

      contactStatus.className = 'form-status success';
      contactStatus.innerHTML =
        'Thank you, <strong>' + name.replace(/[<>&"]/g, '') + '</strong>. Your inquiry has been prepared. ' +
        '<a href="mailto:wasifiah@gmail.com?subject=' + subject + '&body=' + body + '" style="color:#c9a84c;text-decoration:underline;font-weight:700;">Click here to send directly via your email client</a>, or email us at <strong>wasifiah@gmail.com</strong>.';
    });
  }
})();

