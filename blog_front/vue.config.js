// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         prependData: `@import "@/assets/styles/public.scss;"`,
//         // additionalData: `@import "@/assets/styles/public.scss"`,
//       }
//     }
//   }
// }

// scss-resources-loader配置
module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 全局变量资源路径
          resources: './src/assets/styles/public.scss'
          // 也可以选择全局变量路径数组, 如果你有多个文件需要成为全局,就可以采用这种方法
          // resources: ['./path/to/vars.scss', './path/to/mixins.scss']
          // 或者你可以将多个scss文件@import到一个main.scss用第一种方法，都是可以的
        })
        .end()
    })
  },
  configureWebpack: {
    module: {
      rules: [{
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }]
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  }
}
