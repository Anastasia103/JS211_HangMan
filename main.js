// 'use strict';

// const assert = require('assert');
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}
let solutionsArray = ['girls', 'given', 'mayor', 'favorable', 'lane', 'train', 'past', 'amputate','session', 'mosaic', 'defendant','smart', 'year']
let solution = solutionsArray.random().split("")
let progress = solution.map(x => x = '_')
let pLives = 4

function updatedHandle1() {
  guess = document.getElementById("guess").value
  console.log(guess)
}
  const iSolution =() => {
  document.getElementById("guessedWords").innerHTML = (progress.toString().replace(/,/g, ' '))
  document.getElementById("lives").innerHTML = (`${pLives} lives`)
  console.log(progress)
  }

  const letterCorrect = (string) => {
    if(solution.indexOf(string) !== -1){
      return true
    } else {
      return false
    }
  }
  const isSolutionCorrect = () => {
    if (solution.every((val, idx) => val === progress[idx])){
        return true
      } else{
        return false
  }
}
const wrongLetter = () => {
  console.log("Wrong Letter. Try Again")
  pLives = pLives - 1
  console.log(`You have ${pLives} lives left`)
  document.getElementById("message").innerHTML = (`Wrong Letter. Try Again <br> You have ${pLives} lives left`)
  console.log(solution)
  console.log(progress.toString())
  document.getElementById("guessedWords").innerHTML = (progress.toString().replace(/,/g, ' '))
  document.getElementById("lives").innerHTML = (`${pLives} lives`)
}
const pushedIntoCorrectSpot = (string) => {
    for (let i = 0; i< solution.length; i++){
      if (string === solution[i]){
        progress.splice(i, 1, string)
      }
    }
  }
  function resetLetters() {
    var elements = document.getElementsByClassName('button'); // get all elements
    for(var i = 0; i < elements.length; i++){
      elements[i].style.backgroundColor = "lightgray";
    }
  }
  function resetHangman() {
    var elements = document.getElementsByClassName('hangmans'); // get all elements
    for(var i = 0; i < elements.length; i++){
      elements[i].style.backgroundColor = "black";
    }
  }
  const resetBoard = () => {
    solution = solutionsArray.random().split("")
    progress = solution.map(x => x = '_')
    pLives = 4
    console.log(progress.toString())
    document.getElementById("guessedWords").innerHTML = (progress.toString().replace(/,/g, ' '))
    document.getElementById("lives").innerHTML = (`${pLives} lives`)
  }
const hangman = (guess) => {
    let userGuess = guess.toLowerCase().trim()
    if(letterCorrect(userGuess) === true){
      document.getElementById(guess).style.backgroundColor = "green"
      pushedIntoCorrectSpot(userGuess)
      document.getElementById("message").innerHTML = ("You guessed correct! Guess Again?")
      document.getElementById("lives").innerHTML = (`${pLives} lives`)
      if(isSolutionCorrect() === true){
       console.log("You guessed the word!")
       console.log("Play Again?")
       document.getElementById("message").innerHTML = ("You guessed the word! <br> Play Again?")
       resetHangman()
       resetLetters()
       resetBoard()
      } else {
        console.log(progress.toString())
        document.getElementById("guessedWords").innerHTML = (progress.toString().replace(/,/g, ' '))
      }
    }
    else {
      document.getElementById(guess).style.backgroundColor = "red"
      if(pLives === 4){
        wrongLetter()
        document.getElementById('legs1').style.background ='white'
        document.getElementById('legs2').style.background ='white'
      } else if(pLives === 3){
        document.getElementById('arms1').style.background ='white'
        document.getElementById('arms2').style.background ='white'
        wrongLetter()
      }  else if (pLives === 2){
        console.log("Wrong Letter. Try Again")
        pLives = pLives - 1
        console.log(`You have ${pLives} life left`)
        document.getElementById("message").innerHTML = (`Wrong Letter. Try Again <br> You have ${pLives} life left`)
        console.log(solution)
        console.log(progress.toString())
        document.getElementById("guessedWords").innerHTML = (progress.toString().replace(/,/g, ' '))
        document.getElementById("lives").innerHTML = (`${pLives} life`)
        document.getElementById('body').style.background ='white'
      } else{
        console.log('Ran out of Lives. Try again with a new word!')
        document.getElementById("message").innerHTML = (`Ran out of Lives. Try again with a new word!`)
        resetHangman()
        resetLetters()
        resetBoard()
      }
}
}
  
// const getPrompt = () =>  {
//     rl.question('Guess a Letter in HangMan: ', (guess) => {
//       hangman(guess);
//       getPrompt();
//     });
//   }
//   getPrompt();

//   if (typeof describe === 'function') {
 
//     describe('#testing bank account', function() {
//       it('should create a new bank account',function() {
//         let acct1 = new BankAccount('xx4432', 'James Doe');
//         assert.equal(acct1.owner, 'James Doe');
//         assert.equal(acct1.accountNumber, 'xx4432');
//         assert.equal(acct1.transactions.length, 0);
//       });
//     });
// }