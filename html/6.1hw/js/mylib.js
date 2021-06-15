function $(select) {
    return document.querySelector(select)
}

//添加类 保证类唯一，如果有就不要再添加了
HTMLElement.prototype.addClass = function (cName) {
    if (!cName) {
        throw new Error('params is null!')
    }
    if ('string' !== typeof cName) {
        throw new Error('params typs is error!')
    }
    let re = new RegExp('\\b' + cName + '\\b')
    // 没有相应的类名添加类型
    if (-1 === this.className.search(re)) {
        this.className += ' ' + cName
    }
}
// 删除类
HTMLElement.prototype.removeClass = function (cName) {
    if (!cName) {
        throw new Error('params is null!')
    }
    if ('string' !== typeof cName) {
        throw new Error('params typs is error!')
    }

    let re = new RegExp('\\b' + cName + '\\b')
    // 有类名，删除指定类名
    if (-1 < this.className.search(re)) {
        this.className =  this.className.replace(re,'').trim()
        console.log( this.className )
    }
}
// 有就删除，没有就添加
HTMLElement.prototype.toggleClass = function (cName) {
    if (!cName) {
        throw new Error('params is null!')
    }
    if ('string' !== typeof cName) {
        throw new Error('params typs is error!')
    }
    let re = new RegExp('\\b' + cName + '\\b')
    // 有就删除没有就添加
    if (-1 < this.className.search(re)) {
        this.removeClass(cName)
    }else{
        this.addClass(cName)
    }
}


