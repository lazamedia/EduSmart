
// Template data untuk simulasi
const templates = {
    navbar: `
        <nav class="w-full max-w-7xl mx-auto rounded-lg bg-green-700 border-2 border-green-300 text-white px-4 lg:px-10 py-4 mt-4 fixed z-50 top-0 left-0 right-0 transition-all duration-300">
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-6">
                    <a href="#" class="text-white hover:text-green-300 transition-colors">
                        <i class="fas fa-home mr-2"></i>Home
                    </a>
                    <a href="#" class="text-white hover:text-green-300 transition-colors">
                        <i class="fas fa-info-circle mr-2"></i>About
                    </a>
                    <a href="#" class="text-white hover:text-green-300 transition-colors">
                        <i class="fas fa-envelope mr-2"></i>Contact
                    </a>
                </div>
                
                <a href="#" class="flex items-center space-x-3 text-white font-bold text-xl tracking-wide">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a7 7 0 00-4 12.9V18a1 1 0 001 1h6a1 1 0 001-1v-3.1A7 7 0 0012 2z" />
                    </svg>
                    <span><span class="text-green-300">Edu</span><span class="text-white">Smart</span></span>
                </a>
                
                <div class="flex items-center space-x-4">
                    <button class="bg-yellow-400 text-green-800 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                        <i class="fas fa-question mr-2"></i>Ask Question
                    </button>
                </div>
            </div>
        </nav>
    `,
    
    footer: `
        <footer class="bg-gray-800 text-white py-16">
            <div class="max-w-6xl mx-auto px-4">
                <div class="grid md:grid-cols-4 gap-8">
                    <div>
                        <div class="flex items-center space-x-3 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2a7 7 0 00-4 12.9V18a1 1 0 001 1h6a1 1 0 001-1v-3.1A7 7 0 0012 2z" />
                            </svg>
                            <span class="text-xl font-bold">
                                <span class="text-green-400">Edu</span><span class="text-white">Smart</span>
                            </span>
                        </div>
                        <p class="text-gray-400 mb-4">Platform pembelajaran interaktif dengan teknologi modern.</p>
                        <div class="flex space-x-4">
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-facebook text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-twitter text-xl"></i>
                            </a>
                            <a href="#" class="text-gray-400 hover:text-white transition-colors">
                                <i class="fab fa-instagram text-xl"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">About</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Courses</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Support</h3>
                        <ul class="space-y-2">
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
                        <p class="text-gray-400 mb-4">Subscribe untuk update terbaru</p>
                        <div class="flex">
                            <input type="email" placeholder="Email address" class="flex-1 px-4 py-2 rounded-l-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                            <button class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-r-lg transition-colors">
                                <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p class="text-gray-400">© 2025 EduSmart. All rights reserved. Built with HTML Templating System.</p>
                </div>
            </div>
        </footer>
    `,
    
    pages: {
        // lokasi file home home/page.html
        
        
        about: `
            <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">ℹ️ Halaman About</h3>
                <p class="text-gray-600 mb-4">Halaman About yang berisi informasi tentang aplikasi.</p>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-semibold text-gray-800 mb-2">Visi</h4>
                        <p class="text-gray-600 text-sm">Menjadi platform pembelajaran terdepan dengan teknologi inovatif.</p>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-800 mb-2">Misi</h4>
                        <p class="text-gray-600 text-sm">Memberikan akses pendidikan berkualitas untuk semua kalangan.</p>
                    </div>
                </div>
            </div>
        `,
        
        contact: `
            <div class="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-lg">
                <h3 class="text-2xl font-bold text-gray-800 mb-4">📧 Halaman Contact</h3>
                <p class="text-gray-600 mb-6">Hubungi kami untuk pertanyaan atau bantuan.</p>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 class="font-semibold text-gray-800 mb-3">Contact Info</h4>
                        <div class="space-y-2 text-sm">
                            <p class="flex items-center text-gray-600">
                                <i class="fas fa-envelope mr-2 text-orange-500"></i>
                                info@edusmart.com
                            </p>
                            <p class="flex items-center text-gray-600">
                                <i class="fas fa-phone mr-2 text-orange-500"></i>
                                +62 123 456 7890
                            </p>
                            <p class="flex items-center text-gray-600">
                                <i class="fas fa-map-marker-alt mr-2 text-orange-500"></i>
                                Jakarta, Indonesia
                            </p>
                        </div>
                    </div>
                    <div>
                        <h4 class="font-semibold text-gray-800 mb-3">Quick Contact</h4>
                        <div class="space-y-3">
                            <input type="text" placeholder="Your Name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <input type="email" placeholder="Your Email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                            <button class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

// Templating System Class
class TemplatingSystem {
    constructor() {
        this.init();
    }

    async init() {
        try {
            // Load components
            await this.loadComponent('navbar', 'navbar-container');
            await this.loadComponent('footer', 'footer-container');
            
            // Hide loading screen
            this.hideLoadingScreen();
            
            console.log('✅ Templating system initialized successfully!');
        } catch (error) {
            console.error('❌ Error initializing templating system:', error);
            this.hideLoadingScreen();
        }
    }

    async loadComponent(componentName, containerId) {
        try {
            const container = document.getElementById(containerId);
            if (!container) {
                throw new Error(`Container ${containerId} not found`);
            }

            // Simulate loading delay
            await this.delay(500);

            // Load template (in real app, this would be fetch from file)
            const template = templates[componentName];
            if (!template) {
                throw new Error(`Template ${componentName} not found`);
            }

            container.innerHTML = template;
            container.classList.add('fade-in');
            
            console.log(`✅ Component ${componentName} loaded successfully`);
        } catch (error) {
            console.error(`❌ Error loading component ${componentName}:`, error);
        }
    }

    async loadPage(pageName) {
        try {
            const contentContainer = document.getElementById('page-content');
            if (!contentContainer) return;

            // Show loading
            contentContainer.innerHTML = '<div class="text-center py-8"><div class="loading"></div><p class="mt-4 text-gray-600">Loading page...</p></div>';

            // Simulate loading delay
            await this.delay(800);

            // Load page content
            const pageContent = templates.pages[pageName];
            if (!pageContent) {
                throw new Error(`Page ${pageName} not found`);
            }

            contentContainer.innerHTML = pageContent;
            contentContainer.classList.add('fade-in');
            
            console.log(`✅ Page ${pageName} loaded successfully`);
        } catch (error) {
            console.error(`❌ Error loading page ${pageName}:`, error);
            document.getElementById('page-content').innerHTML = `
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    <strong>Error:</strong> Failed to load page "${pageName}"
                </div>
            `;
        }
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainContent = document.getElementById('main-content');
        
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        
        if (mainContent) {
            mainContent.classList.add('loaded');
            mainContent.classList.add('fade-in');
        }
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize templating system when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.templatingSystem = new TemplatingSystem();
});

// Global function for page loading
function loadPage(pageName) {
    if (window.templatingSystem) {
        window.templatingSystem.loadPage(pageName);
    }
}

// Real-world fetch example (commented out)
/*
async function loadComponentFromFile(filename, containerId) {
    try {
        const response = await fetch(`components/${filename}.html`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
        
        console.log(`Component ${filename} loaded successfully`);
    } catch (error) {
        console.error(`Error loading component ${filename}:`, error);
    }
}
*/
