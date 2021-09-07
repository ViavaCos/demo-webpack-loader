/**
 * loader本质上是一个函数
 *   content 内容
 *   map 映射关系
 *   meta 元数据
 */

// 异步loader
module.exports = function(content, map, meta) {
    console.log(222);

    // 直接调用this上的async方法就会返回一个callback的方法
    // 直到这个callback方法调用，才会执行下一个loader
    // 在此之前，它会一直等着你，所以在此期间可以做一些异步的事情
    const callback = this.async()

    // 比如写个定时器做点啥
    setTimeout(() => {
        console.log('做点啥');
        // 参数和同步的第二种写法是一样的。
        callback(null, content)
    }, 1000)
}

module.exports.pitch = function(){
    console.log('pitch 222');
}