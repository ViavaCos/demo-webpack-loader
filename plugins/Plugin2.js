class Plugin2 {
    apply(complier){
        complier.hooks.thisCompilation.tap('Plugin2', compilation => {
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
        })
    }
}

module.exports = Plugin2