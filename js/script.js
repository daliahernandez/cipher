var userInput = prompt("enter a sentance");

function capitalLetter(){
  var newWord = userInput[0].toUpperCase() + ' ' + userInput.substr(-1).toUpperCase();
  alert(newWord);
  return newWord
};
capitalLetter();
