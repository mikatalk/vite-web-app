import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import { createHtmlPlugin } from 'vite-plugin-html'

const htmlPlugin = mode => {
  let banner = '';
  if (mode === 'production') {
    baner = `
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9675727214970019"
        crossorigin="anonymous"></script>
      <!-- pwa-bottom -->
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-9675727214970019"
        data-ad-slot="1589920165"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>`;
  }
  const options = {
    entry: 'src/js/main.js',
    inject: {
      data: {
        banner
      },
    },
  };
  console.log('MOde', mode)
  return createHtmlPlugin(options);
}

export default ({ mode }) => {
    return defineConfig({
      // base: mode === 'production' ? '/vite-web-app/' : '/',
      // base: mode === 'production' ? 'https://bricks.tips4devs.com' : '/',
      plugins: [
        VitePWA({
          registerType: 'autoUpdate',
          // includeAssets: ['vite.svg'],
          manifest: {

            // "scope": "/vite-web-app/",
            "start_url": "/index.html", 
          
            // "scope": "/vite-web-app/",
            // "start_url": "/vite-web-app/index.html", 
          
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
            "name": "Bricks",
            "short_name": "Bricks",
          }
        }),

        htmlPlugin(mode)
      ],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "/src"),
          "~@": path.resolve(__dirname, "/src"),
        },
      },
    });
}
