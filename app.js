/* ============================================================
   AURORA IA — interações
   - menu mobile
   - scrollspy na navegação
   - geração de PDF (html2pdf)
   ============================================================ */
(function () {
  'use strict';

  /* ---------- menu mobile ---------- */
  var sidebar = document.getElementById('sidebar');
  var toggle = document.getElementById('menuToggle');
  if (toggle && sidebar) {
    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });
    sidebar.addEventListener('click', function (e) {
      if (e.target.matches('[data-nav]')) sidebar.classList.remove('open');
    });
  }

  /* ---------- scrollspy ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link[data-nav]'));
  var sections = links
    .map(function (l) { return document.querySelector(l.getAttribute('href')); })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('href') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) setActive(en.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ---------- geração de PDF ---------- */
  var btnPdf = document.getElementById('btnPdf');
  var content = document.getElementById('content');

  if (btnPdf && content) {
    btnPdf.addEventListener('click', function () {
      if (typeof window.html2pdf === 'undefined') {
        window.print(); // fallback
        return;
      }

      var original = btnPdf.innerHTML;
      btnPdf.disabled = true;
      btnPdf.textContent = 'Gerando PDF…';
      document.body.classList.add('pdf-mode');

      var opt = {
        margin: [12, 12, 14, 12],
        filename: 'AURORA-IA-laboratorio-security-by-design-LLMs.pdf',
        image: { type: 'jpeg', quality: 0.97 },
        html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', scrollY: 0 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['css', 'avoid-all'] }
      };

      window.html2pdf().set(opt).from(content).save()
        .then(restore)
        .catch(function () { window.print(); restore(); });

      function restore() {
        document.body.classList.remove('pdf-mode');
        btnPdf.disabled = false;
        btnPdf.innerHTML = original;
      }
    });
  }
})();
