const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'https://restcountries.com/v3.1/all',
  //       changeOrigin: true,
  //     },
  //   },
  // },
});
