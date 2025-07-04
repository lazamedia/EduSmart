/*
 * EduSmart simple SPA router
 * --------------------------
 * - injects navbar.html once
 * - injects footer.html once
 * - intercepts <a data-link> clicks
 * - fetches page HTML into #app
 * - shows #loader while fetching
 * - supports browser back/forward
 */
const Router = {
  current: '',

  async init() {
    await this.injectNavbar();
    await this.injectFooter();
    this.attachLinkInterceptor();
    this.navigate(this.getPath());            // load initial route
    window.addEventListener('popstate', () => // handle back/forward
      this.navigate(this.getPath()));
  },

  /* ---------- helpers ---------- */

  getPath() {
    // "/" => "beranda"  |  "/about" => "about"
    const path = location.pathname.replace(/^\//, '');
    return path === '' ? 'beranda' : path;
  },

  showLoader(show = true) {
    document.getElementById('loader').classList.toggle('hidden', !show);
  },

  async injectNavbar() {
    const navbar = document.getElementById('navbar');
    const html   = await fetch('/components/navbar.html').then(r => r.text());
    navbar.innerHTML = html;
  },

  async injectFooter() {
    const footer = document.getElementById('footer');
    const html   = await fetch('/components/footer.html').then(r => r.text());
    footer.innerHTML = html;
  },

  attachLinkInterceptor() {
    document.body.addEventListener('click', e => {
      const link = e.target.closest('a[data-link]');
      if (!link) return;

      const url = link.getAttribute('href');
      // ignore external / anchor links
      if (url.startsWith('http') || url.startsWith('#')) return;

      e.preventDefault();
      history.pushState({}, '', url);
      this.navigate(url.replace(/^\//, ''));
    });
  },

  async navigate(page) {
    if (page === this.current) return;

    const app = document.getElementById('app');
    this.showLoader(true);

    try {
      const res  = await fetch(`/pages/${page}.html`);
      if (!res.ok) throw new Error('404');
      const html = await res.text();
      app.innerHTML = html;
      this.current = page;
      window.scrollTo({ top: 0 });
    } catch (err) {
      app.innerHTML = `
        <div class="p-8 text-center">
          <h1 class="text-2xl font-bold text-red-600 mb-4">Halaman tidak ditemukan</h1>
          <p class="text-gray-600">URL: /${page}</p>
        </div>`;
    } finally {
      this.showLoader(false);
    }
  }
};

/* ---------- bootstrap ---------- */
window.addEventListener('DOMContentLoaded', () => Router.init());
