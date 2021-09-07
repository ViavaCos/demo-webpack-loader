const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                // loader: path.resolve(__dirname, 'loaders', 'loader1')
                // 通过resolveLoader配置查找loader路径后就可以将上面的简写成这样
                // loader: 'loader1'
                
                // 定义多个loader（测试loader的解析是否从后往前）
                use:['loader1', 'loader2', 'loader3'] // 打印333 222 111
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