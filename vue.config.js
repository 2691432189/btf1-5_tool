module.exports = {
  css: {
    extract: false
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'BTF战绩助手'
        return args
      })
  }
}
