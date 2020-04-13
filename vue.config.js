module.exports = {
  publicPath:'./',  //打包后想在本地访问，就这样设置
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'commmon': '@/commmon',
        'components': '@/components',
        'network': '@/network',
      }
    }
  },

  devServer: {
    // 配置端口号和自动打开
    port: 8888
  },

  lintOnSave: false,
 
}
