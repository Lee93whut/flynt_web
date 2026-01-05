import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  /**
   * GitHub Pages 部署需要设置 base 路径
   * 如果部署在用户/组织的 GitHub Pages (username.github.io)，设置为 '/'
   * 如果部署在仓库子路径下 (username.github.io/repo-name)，设置为 '/repo-name/'
   * 当前仓库部署在子路径下，所以设置为 '/flynt_web/'
   * 注意：如果您的实际仓库名称不同，请修改此值
   */
  base: '/flynt_web/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // Alias figma:asset to the assets directory
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },
})
