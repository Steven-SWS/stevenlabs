const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.plugins.delete('prefetch'); // prefetch 삭제 | Lazy-Load 사용예시 : import(/* webpackPrefetch: true */ './views/MyViewName.vue');
  }
})
