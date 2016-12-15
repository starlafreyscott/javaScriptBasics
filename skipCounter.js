
function skipCounter(start, end, skipBy){
  for(var i = start; i < end; i += skipBy){
    console.log(i)
  }
}
console.log(skipCounter(2, 10, 2));