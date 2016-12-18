//////////////////////////////////////////////////////////
//数组处理函数
//////////////////////////////////////////////////////////

/**
 * 数组去重
 * @param arr   输入数组
 * @returns {Array} 输出数组
 */
var unique = function (arr) {
    var newArr = [];
    var map = {};
    for (var i in arr) {
        if (!map[arr[i]]) {
            map[arr[i]] = true;
            newArr.push(arr[i]);
        }
    }
    return newArr;
};


var a = [1,2,3,{x:1}];
//slice做的是浅拷贝, concat做的也是浅拷贝
var b = a.slice(0);
var c = a.concat([4]);
//parse&stringify才能做深拷贝
var d = JSON.parse(JSON.stringify(a));

//////////////////////////////////////////////////////////
//对象类处理函数
//////////////////////////////////////////////////////////

/**
 * 对象深拷贝
 * @param source
 * @returns {{}}
 */
var deepCody = function (source) {
    var result = {};
    for (var key in source) {
        result[key] = typeof source[key] === 'object' ? deepCody(source[key]) : source[key];
    }
    return result;
};

//对象合并
//Object.assign
//$.extend() 第一个参数 标示是否深拷贝



