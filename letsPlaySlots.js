"use strict";
var quarters = Math.trunc(Math.random() * 50 + 1);
var amountWon = 0;
var userGoal = 300;

function letsPlaySlots(token, goal){
	for (token; token < goal; token -= 1) {
		//console.log(token);
		var win = Math.trunc(Math.random() * 100 + 1);
		var prize =  Math.trunc(Math.random() * 50 + 50);
		if(token === 0){
			console.log("You are out of tokens! Please try again!");
			break;
		}
		if(win === 100){
			token += prize;
			console.log("you just won " + prize + " tokens!!!!");
		}

	}
}