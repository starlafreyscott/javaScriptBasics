var daysUntillMyBirthday = 60;

function DaysTillBday(bDay){
  var bDayText = " Days untill my birthday";
  var longTime = ". Such a long time... :(";
  var yourBday = "♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•* ♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪ *•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«"
  while(bDay >= 0 && !isNaN(bDay)){
    if(bDay > 5){
      console.log(bDay + bDayText + longTime);
    }else if(bDay <= 5 && bDay !== 0){
      console.log(bDay + bDayText.toUpperCase())
    }else{
      console.log(yourBday);
    }
    bDay -= 1;
  }
}

DaysTillBday(daysUntillMyBirthday);