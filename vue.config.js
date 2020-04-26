module.exports = {
    devServer: {
        host: 'localhost',
        port: 8083,
        proxy: {
            '/api': {
                target: "http://localhost:8088",
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