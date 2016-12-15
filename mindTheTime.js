var hour = 7;
var minute = 30;
var period = "AM";
// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM";

function haveTime(hr, min, per) {
  var toReturn = "";
  var dayPeriod = "";
  per = per.toLowerCase();
  if(hr <= 0 || hr === undefined || isNaN(hr)){ 
    return "hour must be a number in a 12 hour format not in text form";
  }
    if (per === "am"){ 
      dayPeriod = " in the morning"; 
    }  // set's dayPeriod to morning for am
    else if (per === "pm"){ 
      dayPeriod = " in the evening"; 
    } // set's dayPeriod to evening for PM
  
    if (min < 30){
      toReturn = "it's just after " + hr + dayPeriod;
    } else {
      toReturn = "it's almost " + (hr+1) + dayPeriod;
    }
  return toReturn
}

console.log(haveTime(hour, minute, period));