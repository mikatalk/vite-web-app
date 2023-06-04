export default {
  base: process.env.BASE_URL || '/',
}


// import { fileURLToPath } from 'url'
// import { defineConfig, loadEnv } from 'vite'

// export default (configEnv) => {
//   console.log('FUN ITMES:', process.env.VITE_SERVER_PORT,)
//   console.log(configEnv)
//   // Load app-level env vars to node-level env vars.
//   process.env = { ...process.env, ...loadEnv(configEnv.mode, process.cwd(), '') }

//   return defineConfig({
//     base: process.env.VITE_APP_BASE_URL,
//     host: process.env.VITE_SERVER_PORT,
//     resolve: {
//       alias: {
//         '@': fileURLToPath(new URL('./src', import.meta.url)),
//       },
//     },
//     // build: {
//     //   // StackBlitz does not support Brotli
//     //   brotliSize: false,
//     // },
//   })
// }
