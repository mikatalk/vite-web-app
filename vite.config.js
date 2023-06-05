import { defineConfig } from 'vite';
import { rollup } from 'rollup'
import { VitePWA } from "vite-plugin-pwa"
import { nodeResolve } from '@rollup/plugin-node-resolve'


const CompileServiceWorker = () => ({
  name: 'compile-typescript-service-worker',
  async writeBundle(_options, _outputBundle) {
    const inputOptions = {
      input: 'src/js/sw.js',
      plugins: [nodeResolve()],
    }
    const outputOptions = {
      file: 'dist/sw.js',
      format: 'es',
    }
    const bundle = await rollup(inputOptions)
    await bundle.write(outputOptions)
    await bundle.close()
  }
})



export default ({ mode }) => {
    return defineConfig({
      base: mode === 'production' ? '/vite-web-app/' : '/',
      plugins: [
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['vite.svg'],
          workbox: {
            importScripts: ['src/js/sw-functional.js'],
            globIgnores: ['**/node_modules/**/*', '**/sw.js'],
          },
        }),
        CompileServiceWorker()
      ]
    });
}
