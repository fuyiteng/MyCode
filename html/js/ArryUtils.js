//数组进行冒泡排序
Array.prototype.arySort = function(){
	console.log(this);
	//被循环的数this[i]
	for(var i = 0;i<this.length;i++){
		//循环次数this[i] this内的所有数 依次对比
		for(var j = i+1;j<this.length;j++){
				//如果大于下一位数 就交换位置
				if(this[i] > this[j]){
				//把小的那个数 存起来
				var samll = this[j];
				//把大的数赋值给小的数的位置
				this[j] = this[i];
				//把小的数赋值给大的数的位置
				this[i] = samll;
			}
		}
	}
	console.log(this);
}

//在数组末尾加一个值
//value 值
Array.prototype.aryInsert = function(value){
	this[this.length] = value;
	console.log(this)
}

//在数值指定位置加入一个值
//index 下标
//value 值
Array.prototype.aryInsertIndex = function(index,value){
	var length = this.length;
	console.log(this);
	for(var i =length;i>=index;i--){
		if(i==index){
			this[i] = value;
		}else{
			this[i] = this[i-1]
		}
	}
	console.log(this);
}

//删除指定值
//index 下标
//value 值
Array.prototype.aryDelet = function(index,value){
	console.log(this);
	//只传入下标 则根据下标删除
	if(index < this.length &&index != "undefined" && value === undefined){
		var length = this.length;
		for(var i = index;i<this.length;i++){
			this[i] = this[i+1];
		}
		this.length--;
		console.log(this);
				//传入下标和值 删除具体位置的具体的值
	}else if(index < this.length &&index != "undefined" && value != undefined){
		//匹配值是否相等
		if(this[index] === value){
			for(var i = index;i<this.length;i++){
				this[i] = this[i+1];
			}
			this.length--;
		}
		console.log(this);
	}
}

//删除全部等同于value的数据
//value 值 删除数组内所有等同于这个值的数据
Array.prototype.aryDeletAllValve = function(value){
	for(var i = 0;i<this.length;i++){
		if(this[i] === value){
			for(var j = i ;j<this.length;j++){
				this[j] = this[j+1];
			}
			i--;
			this.length--;
		}
	}
	console.log(this)
}

//数组拷贝
//bdgin 起始数 必须填 代表起始下标 可以为负数 如果是负数则从末尾开始取值
//end 结尾数 可以不填 代表结束下标 可以为负数 如果是负数则从末尾开始取值
//都不填则全部复制
Array.prototype.MySlice = function(begin,end){
	var Begin = begin
	var End = end
	var NewArry = [];
	if(begin<0){
		Begin = this.length+begin
	}
	if(end<0){
		End = this.length+end
	}
	if(begin == undefined && end ==undefined){
			for(var i = 0;i<this.length;i++){
				NewArry.push(this[i]);
			}
	}else if(begin != undefined && end == undefined){
			for(var i = Begin;i<this.length;i++){
				NewArry.push(this[i]);
			}
	}else{
		for(var i = Begin;i<End;i++){
				NewArry.push(this[i]);
			}
	}
	return NewArry;
}