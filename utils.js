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


var a = [1, 2, 3, {x: 1}];
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


//////////////////////////////////////////////////////////
//hook函数
//////////////////////////////////////////////////////////

//hook函数
var log = function (msgs, type) {
    //
};

// 仅拦截 console 部分方法, 未涉及到的方法保持不变
['log', 'error', 'warn', 'debug', 'info'].forEach(function (item) {
    var oldMethod = console[item];
    console[item] = function () {
        oldMethod.apply(console, [].slice.call(arguments));
        log(arguments, item)
    }
});

//////////////////////////////////////////////////////////
//无破坏性hook函数 应用了es6特性
//////////////////////////////////////////////////////////
var log = function (msgs, type) {

}
var oldConsole = console;
var handle = {
    apply: function (target, ctx, args) {
        log(args, target);
        return Reflect.apply(target, ctx, args);
    }
};

console.log = new Proxy(oldConsole.log, handle);

console.log('12');

if (Reflect && Proxy) {

}


//////////////////////////////////////////////////////////
//replace format字符串
//////////////////////////////////////////////////////////
//string format
/**
 * string format
 * @type {Function|*}
 */
String.prototype.format = String.prototype.format || function () {
        var args = arguments;
        if (args.length == 0) {
            return "";
        }

        var str = this.toString();


        return str.replace(/\$(\d+)/g, function (filterStr, filterNum) {
            var newStr = args[filterNum];
            return newStr != undefined ? newStr : filterStr;
        })
    };

var newStr = "$1,$2,$,$$0$".format("qq", "ww");
print(newStr);