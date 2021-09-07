
/**
 * loader本质上是一个函数
 *   content 内容
 *   map 映射关系
 *   meta 元数据
 * 
 *  如何获取webpack配置loader时，通过option传递的参数？
 */
module.exports = function(content, map, meta) {
    const schema  = require('./schema.json')

    // 通过 this.getOptions() 获取options的值， 原来通过引入loader-utils包中的getOptions()来获取
    // 
    console.log(333, this.getOptions(schema));

    return content
}

module.exports.pitch = function(){
    console.log('pitch 333');
}