/**
 * loader本质上是一个函数
 *   content 内容
 *   map 映射关系
 *   meta 元数据
 */
// 同步loader(写法1)
// module.exports = function(content, map, meta) {
//     console.log(111);
//     return content
// }

// 同步loader(写法2)
module.exports = function(content, map, meta) {
    console.log(111);

    // 直接调用this中的callback方法，就不需要return了
    // 第一个参数是错误对象，如果没有错误就传null就行了
    // 第二、三、四个参数和上面的一样
    // 一般就传第一、二个参数就行了。 第三、四个参数可以不传
    this.callback(null, content, map, meta)
}

/**
 * 由于loader的执行是从后往前的，但是如果定义了pitch方法则会提前执行
 * loader从上往下(从左往右)解析，解析完成后执行pitch方法，然后再从下往上(从右往左)执行
 */
module.exports.pitch = function(){
    console.log('pitch 111');
}