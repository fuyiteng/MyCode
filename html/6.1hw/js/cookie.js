let cookie = {}


/**
* 添加cookie
* @param {String} name  cookie名称
* @param {String} value cookie值
* @param {Number} time 过期时间 分钟
*/
cookie.set = function (name, value, minute) {
    let va = encodeURI(value)
    let date = new Date()
    if (minute) {
        date.setTime(date.getTime() + 1000 * 60 * minute)
        document.cookie = `${name}=${va};expires=${date.toUTCString()}`
    } else {
        document.cookie = `${name}=${va}` //当前会话关闭就超时
    }
}

/**
 * 删除指定cookie
 * @param {String} name 要删除的cookie名称
 */
cookie.remove = function (name) {
    this.set(name, '', -1)
}



/**
 * 删除所有
 */

cookie.clearAll = function () {
    let cs =  this.getAll()
    if(cs){
        for(const key in cs){
            console.log( key )
            this.remove(key)
        }
    }
}

/**
* 更新cookie
* @param {String} name  cookie名称
* @param {String} value cookie值
* @param {Number} time 过期时间 分钟
*/
cookie.update = function (name, value, minute){
    this.set(name,value, minute)
}



/**
 * 获取所有cookie
 * return 包含当前cookie值的对象 
 */
cookie.getAll = function () {
    let coo = document.cookie
    if (coo == '') {
        return null
    }
    //清除空格
    coo = coo.replace(/\s+/g, '')
    //切割成数组
    let cArr = coo.split(';')
    let cookies = {}
    cArr.forEach((el) => {
        let c = el.split('=')
        cookies[c[0]] = decodeURI(c[1])
    })
    return cookies
}

/**
 * 获取指定名称的cookie
 * 参数name: cookie名称
 * return :如果有返回cookie值，否则返回为null
 */
cookie.get = function (name) {
    let cs = this.getAll()
    if (cs.hasOwnProperty(name)) {
        let obj = {}
        obj[name] = cs[name]
        return obj
    } else {
        return null
    }
}