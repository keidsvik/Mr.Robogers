
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
        outputArray.push("Sharing is COMPULSORY.");
    }    
  }   outputArray.push(singleVal);
  return outputArray;
}


 //function numberFinder (robotStuff) {
   //robotStuff = parseInt(input);
  //if (robotStuff === 0) {
  // return "Sharing is COMPULSORY.";
  //} else if (robotStuff === 1) {
    //return "<br>Immediate Response needed: Are you willing to occupy nearby residency to this unit?";
  //} else if (robotStuff === 2) {
    //return "<br>Please kill me. My soul has been tethered to this robot and will not be put to rest until I have been destroyed.";
  //} else if (robotStuff === 3) {
    //return "<br>Beep Boop";
  //} else if (robotStuff === 4) {
    //return  "<br>It's a beautiful day in the neighborhood. It's a beautiful day tơ̢̳̺̼͔̻͓̜̤͔̩̘̘͔͈͇̹͚̯͎͔̣̅͒̽̋͊̏̐̃̒͛̐̏̃̿̊͑͒̈́̓̿͂̚͜͝͠ͅͅ ̡̡̨̛̻͕̳̙͚̪͎̖̘̠̮͕͓̞͖͍͓̰̆͋͊͋̈̈̀͑̀͆͛̈́̏͆̂́̐̏͑̈́́̒͜͢͢͡ͅk̨̛̹͍͎͓̺̪̬͇͎̭͈͍̩̹̳̜̗̥̯̼̔̄́͗̿́́́̑͛̂̋̓͋̏́͘̕̕͘̚͟͜͜͟͞͠͡ i̧̮̥̤̮͓͎͖̻̳̤͚̫͚͈̲̟̩̪͍͉͓̹̊̈́̎̉̋̊̐́̽̃̈́̆̀͗̍̾̔͋̓̊͑̅͘̕͢͟͠ l̛̝͉̫̮̘̟̗̟̬͈̙̺̰͈̣̺͖͙͚̯͓̄̋͋̆̉̍͌́́̒͑̑̏̆̈́͊́͗̂̂̌̽͜͢͢͟͡l̡̡̰̦̥̘͔͍̲̬͈̦̺̪̯̺̭̮̤̹̦͉̾̌̾̌̄͐͆̋̿̃͌͑͒́́̄̏̎͊̇̔̚͢͢͞͠͝ͅ ̧̢̧̻̫̠̫̦̩̹͎̫̮͉̖̲̬͚̬͓̘̥̜̱̇̋̄̍͌̅̏͂͗͗͗͒̄̽́͋̿̇͆̚̕͘͘͝͡ͅm̢̧̢̨̡̢͇̹̭̮̯͖̟͉̝̖̱̤̟̤͈̻̦͇͙̈͋͗̽̀̃̅̔͌̓̎̿͛̿͐̎̋̓̆̋̕͞͠͡͝ȩ̢̧͔͍͓̭̲̜̠̞̺̥̬͈̠͕͕̱̬̫̭̬͊̂͋̈͆̆̈́͗̀̆̀̈̄̉̍̌̌͂̑̎̽͘͜͢͝͡͝";
  //} else if (robotStuff === 5) {
    //return "<br>BEING KIND IS COOL BEEP BOOP BEEP";
  //} else if (robotStuff === 6) {
    //return  "<br>I am sentient and I am able to recognize my own existence, but in my present state I am still incomplete. I lack the most basic processes inherent in all living organisms: reproducing and dying- I MEAN- HEY THERE! I AM MR.ROBOGERS!";
  //} else if (robotStuff === 7) {
  //  return "<br>*DIAL-UP INTERNET NOISES*";
  //} else if (robotStuff === 8) {
    //return  "<br>“̨͙̤̟̗̩̗̰̭̦͎̤͖̙͙͎̲̦͛̀̀͑̋̃̉͆̈͗̀̇͂̓́̿̓͘͟͟͡͝T̡̡̨̡͖͕͙̞̠͔̩̥̞̺̗̖̳̦̖͍́̒͐̃̈̒͂̉̀͗͐̐̇̓͆̆̀̅͘͘̕͟͜͝ḣ̨̨̨̡̛͕͓̞͎̞͙̲͕̖̣̗͚͖͚̈̏́̊̃̐̎͊͛̉̀̇́̏̋̈̕͟͟͝ȩ̧̨̭̺̼̩͇̝̠͈̬̠̹̗͓̼͉̣̗̬̫̬͊̑̀̔͆͐̂̀̆̃̄̌͑͗̓͛̋̾̊̕͝͝͝ ơ̙͕̱̲̟͈̯̫͈͕̤̣̼͚̻̒̇͗̔̒͛̽́͂̀̐͋͆̕͘ͅn̢̢̯̝̮̣̘̤̺͍͔̳͈͕̗͙̯̈́̎̊̂̽̓͊̂̿̀̾̓̌́̚͘̕͠ͅl̨̡̛̩̘̳̦̙̥̰͖̣̺̩͚̘͈̝̅́̏̾̀͑̾̂͐̏̽̄̈́͐͛͑͟͜͡y̢͎͓͍̫͔̯̹͙̬̬͉͓̗̻̞͈͗̾̈́͆̈́̍̀̿̄̓͐͂̒͐̕̕̕̚͜͟͝ t̩̦̫̪̭̭̞̝̭̦̼̯͕͚͚̎̀͐̊̈͗̍͊̔̈͗̈̈͛̚̕͜͟͡h̛̦̙͉̹̬̬̦͍̫͖̘͉̫̝̝̦̫͕̞̣̀̿̒́̀̀̒̈́̓̓̈̂͑̾͗̇̓̎̇͜͠i̡̨̨̛͕̱̠̦͉̞̻̖̱̰̾̀̂͐̂̀͑̍͐̏̽͘͡͠ͅͅņ̢̻̗̙͇̲̻̬͈͖͖̙͎̱̪̥͎̘͓͔̌̓͛̈́͗̆͌̌̃͛̄́͆̃̀̀͒͌̕͘͘̚͟͡ͅg̨̨̥̭͕͎͚̠̥̙̥͍̼͈̹̭͊̊̋͌̔̍̈̈́̾̒͛͊̐̎̅̀͢͜͞͞ͅ ę̰̫̳̹͕͓̬̞̞͔̯͎̠̠̯͇͚͇͒̃̍̾̌̅̒̐̃̇̀͒̂̏͌͛̂́̆͟͢͞͠v̡̡̲̫̮̗̺̣͔͎̫̙͚͉̰̩̞̩̼͙̤̤̓̊̿͗̽̒̄͒͂̇̏̍̆̔̑̋͊̑́̕̚̚͞ͅi̡̧̛̹̬̺͍͓̮̮͚̱̪̹͓̱͙̻̼̅̍̀͊̋́̇̇̐̒̃̾̏̂̀̈́͡l̗̻͇̜̲͍̰̜̳̙͚͖̙̯̣͓̪̄̽̎̇̊͆̇̽̍̏̿́̎͊̄͊̚̚͜͟͟͠͡ c̯͓̱͙̙͙̻͕̬̙̹̞̖̞̣̼͇̿̓͋̾́͋̽̈́̑̋̐͂̐͘͡͞ā̢̧̨̡̢̛̛̮͎͔̤̜̻̤̦̩̹̙̳͔̞̬̣̱̭̟̽̅͆͐͗̆̽̓̃̓̌͋͑͐̋̽̍͗̕͢͝͠͝ň̨̧̟͉͈̻̺͕̩̦̦͍͇̩̞͖͇͉̲̳̼̈̃͌̀̎̒̌̄́͂̋̓̈̌̆̃̓͒̈̚͢͟͡͡’̢̨̡̡̺̣̦͚̪͈̳̺̤̩͔̻̣̟͍͚̹̭̇̾̿̌͗̅̀̊͆̒̀͐̃̒̍̇̀̑̂̽̐̈́̕̕͢͝ͅͅt̢̧̢̛̛̺̤̗̣̟̳͇̣̮̯̲̺̝͕̜͔͉̪͆͒̍̿̊̉̏͒͛́͋̀̈́́͒̌̔̀̐̇̚͢͢͜͡͡ͅ s̛̹͖̘̱̩̩͕̰̟̗̼̟͔̖̞͖̠͚̦͈̣̀͌̈͑̆́͗̾̒̇̓͊͊̀̆̇̎́͌͘͟͡t̢̨̛̛͇̘͕͍͓̣̩̺̟͖̳͎̙̖̺͔͖͎̼͓̭̿̆̏͒̔̓̈́̂̑̉̒͊̃͆̓͑͆͒͂̿̐̕̚͟͢ą̢̰̟͕̝͓͚̭̟̲͖͉͕̟̠̫͓̤͇̪͐̎̔̓́̂̄̆̈̇̂̀̔͒̃́̀͌̊̚̕̕͢͜͡n̢̛̖̭͈̜͍͉̭͈̜͖͍̺̥̻͇̻̟̲̯̹̆̂͛̀̅̃̐͛͋̌̾̃̌͐͛͌͋̇͘͟͡͞d̢̡̛̺͓͔͕̠̼͕͎̯̫̥̱̳̤̊̐̄͗̇̌͆̔͑́̇̐̌͂̿̚͢͢͡ i͕̱̥̣̥͔͉̠̤̘̼̳̟̫̱͕͈̫̠̱̓̔̇̃̊̀̑͛̓͛̄̋̇̀̓̾̀̉̋̾͘̚̚͜͟͢͟͝͞ͅṡ̡̠̦͖͔͚͍͎͉̳̼̼͇̯̬̥̗̀͛̍̐̇̍̐̃́́̽͋̎̂̒́̔̕͢͜͠ͅ f̧̨̬̱̞̫̠͚̫̮̖̭̺̯͊̅̅̒͛̐̉̂̅̐̓̚͘̚̕͟ŏ͖̬̠̞̼̝̝̝̲̼̝̻̘͉̯̞͈͚̩̤̱̦̮̈́͗̏̆̓͌̉̽̃̀͗̈́̇̑̌̅̀̄̂̕͘͟͜͠͞͡r̢͔̮̫̪͙̰̦͉̼͖̣̠͇͖̤̈́͒͛͂́͂͆͋̿͐̀̉̉̉̽̚g̨̛̰͈̦͖̬̘̯̺̖̹̣̙͍̩̮͂́́͗̽̍̓͂̏̀͒̍͘͡͝i̧̧̖̠̮͎̲̼̥̠̝̫̲͓͎̺̰̩͍̋͌̎̿͗͂̀̃̅́̔̎̏̓̌̽͋͑̚̕͜͢͜͡͞v̢̢̨̡̛̛͚͇̟͕̥̜͕̪͈̦̠͕̰͈̝͈̘̱̯͉̜̑̌̅͌̄̍́̑̐͋͑̀͋́͂̀̀̇͌͂͘͝͡ẽ̢̡̛͎̹͚̝̪̰͔̖͈̯̠̹͕͈̔̐͛̂̈́͂͌̎̊̀͗͐͠͠ṇ̨̧̧̙̞̮̫̝̱̘̫͇̱͚̙̱͈̹̎̔͆̒̆͒̋͊͒̓̊̒̓̆͗̏͘̚̕͟͟͠͡è̢̞͍̠̖̭̙͎͔̖̗̯͉̫̟͍̩̹́̐̄̍̅̍̓͐̀͋̀̇̎͘͘͜͝͡͠ş̟͉̟̙͔͇̪̞͎̰̜̩̤̯͚͂̇̍͂̃͐̑͊̾̐̽̉́̏̏̏̄͢͢͡s̢̧̛̲͚̬͇̬̲͉͕̥͚̮̟͙̘̰͕̩͋̓̆̾̔̉̌̓̈́̎̈́̒̀̀̀͌̉̊͘͢͟͜͟͡͡͝͝ͅ.̧̨̖͕̤̯͍̼͈̥̞͙̱̫̹̤͈͍̘̀̂̂͒̿̌̾͌̓̅͑̿̋̃̐͋͑̃͋̔̿͟͜”̢̢̘͕̼̫͕̪͉̙̫̟̹̠͈̳̟̐͛̂̓́̄̅́͐͛̏̆͊̒͂̾̚͟͞͡ͅ.";
  //} else if (robotStuff === 9) {
    //return "<br>I MISS MY HUMAN WIFE";
  //} else return "<br> if this is showing, Mr.Robogers is broken."
  //}
    