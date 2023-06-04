import { defineConfig } from 'vite';
import { VitePWA } from "vite-plugin-pwa"

export default ({ mode }) => {
    return defineConfig({
      base: mode === 'production' ? '/vite-web-app/' : '/',
      plugins: [
        VitePWA()
      ]
    });
}
