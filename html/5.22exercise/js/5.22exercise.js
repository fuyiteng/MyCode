//将传入的数组按一定的格式改为json数组对象并生成对应的li传入其中
//数组可以依需求进行更改
//传入参数：
//arryUser：传入的数组
//ulUser：传入的ul的id
//btn：指定随机选择的按钮
function randomUser(arryUser,ulUser,btn){
	this.arryUser = arryUser
	this.ulUser = ulUser
	this.btn = btn

	let jsonUser = jsonList(this.arryUser);
	liList(jsonUser,this.ulUser);
	randomName(this.btn)

	//将传入的数组改为json数组格式并返回
	//该方法的具体实现可以根据需求进行更改
	//可以写多个备用
	function jsonList(arryUser) {
		let jsonUser = [];
		for (let i = 0; i < arryUser.length; i += 2) {
			jsonUser.push(new User(arryUser[i], arryUser[i + 1], "./img/cm.jpg"))
		}
		return jsonUser;
	}

	//将json数组放入指定ul元素中
	//按数量生成li
	function liList(jsonUser, ulUser) {
		let ulFragment = document.createDocumentFragment()
		let ul = document.querySelector(ulUser)
	
		for (let i = 0; i < jsonUser.length; i++) {
			let li = document.createElement("li")
			
			//为每个li元素添加一个id做区分
			li.id = "item" + i
	
			let spanName = document.createElement("span")
			spanName.innerText = jsonUser[i].Name
			li.appendChild(spanName)
	
			let spanSex = document.createElement("span")
			spanSex.innerText = jsonUser[i].Sex
			li.appendChild(spanSex)
	
	
			let imgPic = document.createElement("img")
			imgPic.src = jsonUser[i].Pic
			li.appendChild(imgPic)
	
			ulFragment.appendChild(li)
		}
		ul.appendChild(ulFragment)
	}

	//绑定按钮控件
	function randomName(btn) {
		let random = 0;
		document.querySelector(btn).onclick = function () {
			document.querySelector("#item" + random).className = "";
			random = Math.floor(Math.random() * jsonUser.length);
			document.querySelector("#item" + random).className = "backcolor";
			//不覆盖添加一个class
			//document.querySelector("#item" + random).classList.add("fontColor");
		}
	}
}

//封装的pojo类对象用于创建一个用户对象
function User(Name, Sex, Pic) {
	this.Name = Name;
	this.Sex = Sex;
	this.Pic = Pic
}