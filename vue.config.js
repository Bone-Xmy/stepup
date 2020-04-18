module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: "https://shop.hualala.com",
                changeOrigin: true, // 是否修改请求头的origin属性
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}