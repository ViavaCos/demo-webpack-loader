const babel = require('@babel/core')
const util = require('util') 
const schema = require('./babelLoaderSchema.json')

const transfrom = util.promisify(babel.transform)

module.exports = function(content, map, meta){
    const options = this.getOptions(schema)

    // 创建异步loader
    const callback = this.async()

    // 通过@babel/core的方法对代码进行编译
    transfrom(content, options).then(({code, map}) => {
        callback(null, code, map)
    }).catch(e => callback(e))

}