import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';


import path from 'path';
const addWebVitals = () => {
  return {
    name: "add-web-vitals",
    transformIndexHtml(html) {
      return html.replace(
        /<\/body>/,
        `<script type="module">
        import {onCLS, onFID, onLCP} from 'https://unpkg.com/web-vitals@3?module';
      
        function sendToAnalytics(metric) {
          const body = JSON.stringify(metric);
          (navigator.sendBeacon && navigator.sendBeacon('https://httpbin.org/status/200', body)) ||
            fetch('https://httpbin.org/status/200', {body, method: 'POST', keepalive: true});
        }
        
        onCLS(sendToAnalytics);
        onFID(sendToAnalytics);
        onLCP(sendToAnalytics);
      </script></head>`
      );
    }
  };
}
export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 80,
        progressive: true,
        optimizeSize: true
      }
    }),
    ViteMinifyPlugin({
    }),
    addWebVitals(),
  ],
  base: './',
  build: {
    css: {
      minify: true, // Enable CSS minification
      include: ['tooplate-crispy-kitchen.css'],
    },
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        detail: path.resolve(__dirname, 'about.html'),
        contact: path.resolve(__dirname, 'contact.html'),
        checkout: path.resolve(__dirname, 'menu.html'),
        cart: path.resolve(__dirname, 'news-detail.html'),
        shop: path.resolve(__dirname, 'news.html'),
        'js': path.resolve(__dirname, 'js/custom.js'),
      },
    }
  }
});
