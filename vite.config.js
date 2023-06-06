import { defineConfig } from 'vite';
import { VitePWA } from "vite-plugin-pwa"

export default ({ mode }) => {
    return defineConfig({
      base: mode === 'production' ? '/vite-web-app/' : '/',
      plugins: [
        VitePWA({
          registerType: 'autoUpdate',
          // includeAssets: ['vite.svg'],
          manifest: {

            "scope": "/vite-web-app/",
            "start_url": "/vite-web-app/index.html", 
          
            "background_color": "#7cc4ff",
            "theme_color": "#7cc4ff",
            "description": "Fit as many piece as you can",
            "display": "standalone",
            "icons": [
              {
                "src": "icon.png",
                "sizes": "512x512",
                "type": "image/png",
                "purpose": "any maskable"
              }
            ],
            "name": "Stack n Fit",
            "short_name": "Stack&Fit",
          }
        }),
      ]
    });
}
