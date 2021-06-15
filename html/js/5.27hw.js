function onceArry(arry){
	let newArry = []
	let num = 0
	for(let i = 0;i<arry.length;i++){
		for(let j =i+1;j<arry.length;j++){
			if(arry[i]===arry[j]){
				arry[j] = undefined
			}
		}
		if(arry[i]!==undefined){
			newArry[num] = arry[i]
			num++
		}
	}
	console.log(newArry)
}