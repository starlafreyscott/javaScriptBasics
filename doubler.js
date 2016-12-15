var aTime = 30;
var aAmount = 0.01;

function TimedDoubler(amount, time){
  var amountTill10K = 0;
  var startAmount = amount;
  var startTime = time;
  var stopper = true;
  var amountAnd10K = "";

  while(time > 0){
    amount = amount * 2;
    time -= 1;

    if(amount >= 10000 && stopper){
      amountTill10K = time;
      stopper = false;
    }
  }
  amountAnd10K = "It will take " + amountTill10K + " days to get to 10k if you are doubling " + startAmount + " and after " + startTime + " days of doubling you will have $" + amount;
  return amountAnd10K;
}
console.log(TimedDoubler(aAmount, aTime));