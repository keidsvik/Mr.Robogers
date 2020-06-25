
// UI LOGIC
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const humanInput = $("#userInput").val();
    const output = robotSpeak(humanInput);

    $("#output").prepend(" " + `<p>${output}</p>` + " ");
  });
});

// BUSINESS LOGIC
function robotSpeak(input) {
  let outputArray = [];
  for (let i=0; i <= input; i++) {
   
    
    if ([i].toString().includes(3)) {
        outputArray.push("<br>BEEP")
    } else if ([i].toString().includes(2)) {
        outputArray.push("<br>BOOP")
    } else if ([i].toString().includes(1)) {
        outputArray.push("<br>Immediate Response needed: Are you willing to occupy nearby residency to this unit?")
    } else 
      outputArray.push("<br>" + i);
  }
    return outputArray;
}
