var someArr = ["James", "Jill", "Jane", "jake"]
var forward = false;
var symbol = "-->"
 
function fancyArray(arr, sim, fwd){
  for(var i = 0; i < arr.length; i += 1){
    if(fwd){
      console.log(i + " " + sim + " " + arr[i]);
    } else {
      console.log((arr.length -1) - i + " " + sim + " " + arr[(arr.length -1) - i]);
    }
    
  }
}

fancyArray(someArr, symbol, forward);