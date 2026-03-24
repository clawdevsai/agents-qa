import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

/** Dev: mesmo contrato que o Express em producao (`GET /api/health`). */
function apiHealthPlugin(): Plugin {
  return {
    name: 'api-health',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const pathOnly = req.url?.split('?')[0]
        if (pathOnly === '/api/health' && req.method === 'GET') {
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ ok: true }))
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss(), apiHealthPlugin()],
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
})
