import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// @ts-ignore
import pkg from './package.json'

export default defineConfig({
  build: {
    sourcemap: true,
    minify: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: format => (format === 'es' ? 'index.mjs' : 'index.cjs'),
    },
    rollupOptions: {
      external: [
        ...Object.keys(pkg.dependencies),
        ...Object.keys(pkg.peerDependencies),
        'react',
        'react-dom',
        'framer-motion',
        '@stitches/react',
      ],
    },
  },
  plugins: [
    react(),
    dts({
      tsConfigFilePath: 'tsconfig.json',
      insertTypesEntry: true,
      noEmitOnError: true,
      skipDiagnostics: false,
      logDiagnostics: true,
    }),
  ],
})
