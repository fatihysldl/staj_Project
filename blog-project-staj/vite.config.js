import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'], // CSS ve JS giriş dosyalarını tanımlayın
            refresh: true, // Canlı yenileme özelliğini etkinleştirir
        }),
    ],
});
