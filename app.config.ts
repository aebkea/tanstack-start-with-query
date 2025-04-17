import { defineConfig } from '@tanstack/react-start/config'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    plugins: [
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
    define: {
      "process.env.SITE_URL": JSON.stringify(process.env.CONTEXT === 'production' ? process.env.URL : process.env.DEPLOY_URL),
    },
  },
  server: {
    preset: 'netlify',
  },
})
