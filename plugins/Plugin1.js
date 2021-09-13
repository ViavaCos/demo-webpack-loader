class Plugin1 {
    apply(complier){
        // 绑定的事件名称 Plugin123
        complier.hooks.emit.tap('Plugin123', (compalation) => {
            console.log('emit-tap', 10086);
        })

        // 同步 tapAsync 会额外接收一个参数cb, 当cb调用后，声明周期才会继续往下走
        complier.hooks.emit.tapAsync('Plugin123', (compalation, cb) => {
            
            setTimeout(() => {
                console.log('emit-tapAsync', 10086);
                cb()
            }, 1000)
        })

        // 同步 Promise版本
        complier.hooks.emit.tapPromise('Plugin123', (compalation) => {
            return new Promise(resolve=>{
                setTimeout(() => {
                    console.log('tapPromise', 10086);
                    resolve()
                }, 2000)
            })
        })
    }
}

module.exports = Plugin1