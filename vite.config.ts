import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { IonicResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy(),
    AutoImport({
      imports: [
        'vue', //
      ],
    }),
    Components({
      resolvers: [
        IonicResolver(), //
      ],

      /**
       * 避免掃描專案的 components
       */
      dirs: 'nothing',
      extensions: ['nothing'],
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
