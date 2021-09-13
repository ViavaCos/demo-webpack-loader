class Plugin2 {
    apply(complier){
        complier.hooks.thisCompilation.tap('Plugin2', complation => {
            debugger
            console.log(complation);
        })
    }
}

module.exports = Plugin2