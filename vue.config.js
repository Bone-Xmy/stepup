module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: "https://mall-pre.springboot.cn",
                changeOrigin: true, // 是否修改请求头的origin属性
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    productionSourceMap:false, // 打包后是否显示源码，上线的时候需要设置为false
    chainWebpack: (config) => {
        config.plugins.delete('prefetch');
    }
}