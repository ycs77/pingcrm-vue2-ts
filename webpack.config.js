const path = require('path')

// https://stefanbauer.me/tips-and-tricks/autocompletion-for-webpack-path-aliases-in-phpstorm-when-using-laravel-mix
module.exports = {
  output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
  resolve: {
    alias: {
      '@': path.resolve('./resources/js'),
      '@vue/composition-api$': path.resolve('./node_modules/@vue/composition-api/dist/vue-composition-api.mjs'),
    },
    extensions: ['.ts', '.vue', '.json'],
  },
  devServer: {
    allowedHosts: 'all',
  },
}
