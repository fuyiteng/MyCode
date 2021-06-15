			//MyAssign 深浅拷贝
			//浅拷贝仅在源对象的属性是引用或对象类型时生效
			//set 目标对象 GET1 GET2 源对象1 2
			Object.prototype.MyAssign = function(Set1,Get1,Get2){
				if(Get1!=undefined && Get2==undefined){
					GetKey(Set1,Get1)
					
				}else if(Get1!=undefined && Get2!=undefined){
						GetKey(Set1,Get1)
						GetKey(Set1,Get2)
				}
				function GetKey(SetK,GetK){
					for(var k in GetK){
						if(k === "MyAssign"){
							break;
						}
							SetK[k] = GetK[k];
					}
				}
				return Set1
			}