import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'fsevents',
        'node:fs',
        'node:path',
        'node:url',
        'node:util',
        'node:perf_hooks',
        'node:module',
        'node:crypto',
        'node:events',
        'node:stream',
        'node:string_decoder',
        'node:child_process',
        'node:http',
        'node:https',
        'node:os',
        'node:dns',
        'node:assert',
        'node:v8',
        'node:worker_threads',
        'node:buffer',
        'node:readline',
        'node:zlib',
        'node:net',
        'node:tls',
        'node:http2',
        'node:querystring'
      ]
    }
  },
  optimizeDeps: {
    exclude: ['fsevents']
  }
})
