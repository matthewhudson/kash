const { defineConfig } = require('tsup')

module.exports = defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm', 'iife'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  globalName: 'kash',
  outDir: 'dist',
  minify: true,
  cjsInterop: true,
})
