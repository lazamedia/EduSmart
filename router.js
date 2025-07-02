function router() {
  return {
    current: '',

    init() {
      // 1) muat navbar sekali
      fetch('/components/navbar.html')
        .then(r => r.text())
        .then(html => document.getElementById('navbar').innerHTML = html)
        .then(() => this.attachLinkInterceptors());

      // 2) jalankan routing awal & saat back/forward
      this.navigate(location.pathname);
      window.addEventListener('popstate', () => this.navigate(location.pathname));
    },

    // intercept klik <a data-link>
    attachLinkInterceptors() {
      document.body.addEventListener('click', e => {
        const link = e.target.closest('a[data-link]');
        if (!link) return;

        e.preventDefault();
        const url = link.getAttribute('href');
        history.pushState(null, '', url);
        this.navigate(url);
      });
    },

    // muat file konten sesuai path
    navigate(path) {
      // mapping sederhana: "/" atau "/beranda" → "/pages/beranda.html"
      const page = path === '/' ? 'beranda' : path.replace(/^\//, '');
      if (page === this.current) return;

      fetch(`/pages/${page}.html`)
        .then(r => r.ok ? r.text() : Promise.reject('not found'))
        .then(html => {
          document.getElementById('app').innerHTML = html;
          this.current = page;
          window.scrollTo({ top: 0 });      // reset scroll
        })
        .catch(() => {
          document.getElementById('app').innerHTML =
            `<div class="p-8 text-red-500">Halaman "${page}" tidak ditemukan.</div>`;
        });
    }
  }
}
