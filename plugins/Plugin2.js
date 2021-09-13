const fs = require('fs')
const path = require('path')
const util = require('util')
const webpack = require('webpack')
// 可以将二进制的buffer文件转换为 { size(){}, source(){}, ... } 这种webpack可以接受的文件对象
const { RawSource } = webpack.sources

// 可以将同步的代码转换为promise的同步代码
const readFile = util.promisify(fs.readFile)

class Plugin2 {
    apply(complier){
        complier.hooks.thisCompilation.tap('Plugin2', async compilation => {
            // debugger
            // console.log(compilation);

            const content = 'var a = 2;\nconsole.log(a);'
            compilation.hooks.additionalAssets.tapAsync('Plugin2', (cb) => {
                // 往输出的资源中添加一个a.js
                compilation.assets['a.js'] = {
                    // 文件大小
                    size(){
                        return content.length
                    },

                    // 文件内容
                    source(){
                        return content
                    }
                }

                cb()
            })

            // 读取resource中的b.js并加入到输入的资源中
            const data = await readFile(path.resolve(__dirname, '../resource', 'b.js'))
            compilation.assets['b.js'] = new RawSource(data)
        })
    }
}

module.exports = Plugin2