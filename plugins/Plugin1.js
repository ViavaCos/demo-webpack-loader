class Plugin1 {
    apply(complier){
        // 绑定的事件名称 Plugin123
        complier.hooks.emit.tap('Plugin123', (compalation) => {
            console.log('emit-tap', 10086);
        })
    }
}

module.exports = Plugin1