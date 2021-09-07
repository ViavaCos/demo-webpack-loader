/**
 * loader本质上是一个函数
 *   content 内容
 *   map 映射关系
 *   meta 元数据
 */
module.exports = function(content, map, meta) {
    console.log(111);

    return content
}

/**
 * 由于loader的执行是从后往前的，但是如果定义了pitch方法则会提前执行
 * loader从上往下(从左往右)解析，解析完成后执行pitch方法，然后再从下往上(从右往左)执行
 */
module.exports.pitch = function(){
    console.log('pitch 111');
}