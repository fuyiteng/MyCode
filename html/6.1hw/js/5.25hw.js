function $(Cname){
	return document.querySelector(Cname);
}

function Mymouseover(ul){
	
	ul.onmouseover = function(ev){
		ev.stopPropagation()
		if(ev.target.nodeName === "LI"){
			document.querySelector(".downDiv").className = "downDiv"
		}
	}

	document.querySelector(".headDiv").onmouseover = function(ev){
		ev.stopPropagation()
		document.querySelector(".downDiv").className = "downDiv"
	}
}

function Mymouseout(ul){
	ul.onmouseout = function(ev){
		ev.stopPropagation()
		if(ev.target.nodeName === "LI"){
			document.querySelector(".downDiv").classList.add("divNone")
		}
	}
	document.querySelector(".headDiv").onmouseout = function(ev){
		ev.stopPropagation()
		document.querySelector(".downDiv").classList.add("divNone")
	}
}
// function addLi(ul,jsonArryName,jsonArryName2){
// 	let ulFragment = document.createDocumentFragment()
	
// 	for(let i in jsonArryName){
// 		console.log(jsonArryName[i])
// 		let liName = document.createElement("li")
// 		liName.innerText = jsonArryName[i].name
// 		liName.className = "headLi"

// 		ulFragment.appendChild(liName)
// 	}
// 	ul.appendChild(ulFragment);
// 	Mymouseover(ul,jsonArryName2)
// }

// function Mymouseover(ul,jsonArryName2){
// 	let liName = document.createDocumentFragment()
// 	ul.addEventListener('mouseover',Myover,false);

// 	function  Myover (ev){
// 		ev.stopPropagation()
// 		if(ev.target.nodeName ==="LI"){
// 			let downDiv = document.createElement("div")
// 			ev.target.appendChild(downDiv)
// 			downDiv.className="downDiv"
// 			let downUl = document.createElement("ul")
// 			downDiv.appendChild(downUl)
// 			for(let i in jsonArryName2){
// 				let downLi = document.createElement("li")
// 				downLi.innerText = jsonArryName2[i].name
// 				liName.appendChild(downLi)
// 			}
// 			downUl.appendChild(liName);
// 		}
// 		ev.target.onmouseover = function(ev){
// 			ev.stopPropagation()
// 		}
// 		ev.target.removeEventListener('mouseover',Myover,false)
// 	}

// 	function Myshow(ev){

// 	}
// }

// function Mymouseout(ul){
	
// }
