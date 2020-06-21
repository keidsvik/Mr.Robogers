
// UI LOGIC
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const humanInput = $("#userInput").val();
    robotSpeak(humanInput);
    const output = robotSpeak(humanInput);

    $("#output").prepend(`<p>${output}</p>`);
  });
});

// BUSINESS LOGIC
function robotSpeak(input) {
  let outputArray = [];
  let i = input.toString();
  let inputArray = i.split("");

  for (let i=0; i < inputArray.length; i++) {
    const singleVal = inputArray[i];
    
    if (singleVal === "3") {
        outputArray.push("BEEP")
    } else if (singleVal === "2") {
        outputArray.push("BOOP")
    } else if (singleVal === "1") {
        outputArray.push("Immediate Response needed: Are you willing to occupy nearby residency to this unit?")
    } else if (singleVal === "4") {
        outputArray.push("Sharing is COMPULSORY.") 
    } else if (singleVal === "5") {
        outputArray.push("<br>Please kill me. My soul has been tethered to this robot and will not be put to rest until I have been destroyed.")
    } else if (singleVal === "6") {
        outputArray.push("I MISS MY HUMAN WIFE")
    } else 
      outputArray.push(singleVal);
    }
    return outputArray;
}
