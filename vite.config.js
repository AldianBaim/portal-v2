// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { VitePWA } from "vite-plugin-pwa";

// export default defineConfig({
//   base: "/",
//   plugins: [
//     react(),
//     VitePWA({
//       registerType: "autoUpdate",
//       devOptions: {
//         enabled: true,
//       },
//       manifest: {
//         name: "Sistem Informasi Perbukuan Indonesia",
//         short_name: "SIBI",
//         description: "Buku teks pelajaran sekolah dalam berbagai bentuk seperti PDF, Audio, dan Interaktif produksi resmi Pusat Perbukuan untuk mendukung kegiatan belajar mengajar yang lebih modern.",
//         theme_color: "#ffffff",
//         background_color: "#ffffff",
//         display: "standalone",
//         start_url: "/",
//         icons: [
//           {
//             src: "/assets/icons/icon-192x192.png",
//             sizes: "192x192",
//             type: "image/png",
//           },
//           {
//             src: "/assets/icons/icon-512x512.png",
//             sizes: "512x512",
//             type: "image/png",
//           },
//         ],
//       },
//       workbox: {
//         debug: false,
//         skipWaiting: true,
//         clientsClaim: true,
//         runtimeCaching: [
//           {
//             urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
//             handler: 'CacheFirst',
//             options: {
//               cacheName: 'google-fonts-cache',
//               expiration: {
//                 maxEntries: 10,
//                 maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
//               },
//               cacheableResponse: {
//                 statuses: [0, 200]
//               }
//             }
//           },
//           {
//             urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
//             handler: 'CacheFirst',
//             options: {
//               cacheName: 'gstatic-fonts-cache',
//               expiration: {
//                 maxEntries: 10,
//                 maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
//               },
//               cacheableResponse: {
//                 statuses: [0, 200]
//               },
//             },
//           },
//           {
//             urlPattern: ({ url }) => {
//               console.log("Checking URL:", url.href);
//               const matches = url.pathname === '/' ||
//                 url.pathname === '/daftar-katalog' ||
//                 url.pathname.startsWith('/katalog/');
//                 return matches;
//             },
//             handler: 'StaleWhileRevalidate',
//             options: {
//               cacheName: 'api-cache', 
//               expiration: {
//                 maxEntries: 50,
//                 maxAgeSeconds: 60 * 60 * 24,
//               },
//               cacheableResponse: {
//                 statuses: [0, 200]
//               },              
//               plugins: [
//                 {
//                   cacheWillUpdate: async ({ response }) => {
//                     console.log("Response status:", response.status);
//                     console.log("Response headers:", response.headers);
//                     return response;
//                   },
//                 },
//               ],
//             },
//           },
//         ],
//       },
//     }),
//   ],
// });
