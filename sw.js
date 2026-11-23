// Necessário para o celular permitir "Instalar app". Não guarda nada: tudo vem sempre da internet.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
