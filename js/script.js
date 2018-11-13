var userInput = prompt("enter a sentance");

function capitalLetter(){
  var newWord = userInput[0].toUpperCase() + ' ' + userInput.substr(-1).toUpperCase();
  alert(newWord);
  return newWord
};
 // capitalLetter();

function reverseLetters(){
  var newWord = userInput.split("")
  var rev = newWord.reverse();
  var join = rev.join("");
  return join
};
// alert(reverseLetters(userInput));

function callingFunction(){
  var letters = capitalLetter().split(" ");
  var rev = letters.reverse();
  var join = rev.join(" ");

  return join;
}
// 
// alert(callingFunction())
