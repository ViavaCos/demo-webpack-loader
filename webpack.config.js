const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                // loader: path.resolve(__dirname, 'loaders', 'loader1')
                // 通过resolveLoader配置查找loader路径后就可以将上面的简写成这样
                loader: 'loader1'
            }
        ]
    },
    resolveLoader: {
        modules: [
            path.resolve(__dirname, 'loaders'),
            'node_modules'
        ]
    },
    mode: 'development'
}