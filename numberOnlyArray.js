"use strict";
var someArray = [1, "apple", -3, "orange", 0.5];

function numbersOnly(arr){
	var newArray =[];
	for (var i = 0; i < arr.length; i++) {
		if(!isNaN(arr[i])){
			newArray.push(arr[i]);
		}
	}
	// return newArray;
	console.log(newArray)
}