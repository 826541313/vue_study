module.exports = {
    // 开启代理服务器（方式一）
    // devServer: {
    //     proxy: 'http://localhost:5000'
    // }

    // 开启代理服务器（方式二）
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: "javascript/auto"
                },
            ],
        },
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',
                ws: true,
                changeOrigin: true,
                pathRewrite: { '^/api': '' }
            },
            '/demo': {
                target: 'http://localhost:5001',
                ws: true,
                changeOrigin: true,
                pathRewrite: { '^/demo': '' }
            }
        }
    }
}