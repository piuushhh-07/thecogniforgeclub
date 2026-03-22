const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 100);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  function handleSubmit() {
    const name = document.getElementById('f-name').value.trim();
    const email = document.getElementById('f-email').value.trim();
    if (!name || !email) { alert('Please fill in at least your name and email.'); return; }
    document.getElementById('success-msg').style.display = 'block';
    document.querySelector('.form-submit').style.display = 'none';
  }