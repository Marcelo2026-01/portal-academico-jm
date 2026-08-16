// Instalação do Service Worker
self.addEventListener('install', (event) => {
    console.log('Service Worker instalado com sucesso.');
});

// Ativação do Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker ativado.');
});

// Intercepta as requisições (necessário para o PWA ser válido)
self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});