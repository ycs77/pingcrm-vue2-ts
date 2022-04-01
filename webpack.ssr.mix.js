const mix = require('laravel-mix')
const webpackNodeExternals = require('webpack-node-externals')
const webpackConfig = require('./webpack.config')

mix
  .options({ manifest: false })
  .ts('resources/js/ssr.ts', 'public/js', { transpileOnly: true })
  .vue({ version: 2, options: { optimizeSSR: true } })
  .webpackConfig({
    ...webpackConfig,
    target: 'node',
    externals: [webpackNodeExternals()],
  })
