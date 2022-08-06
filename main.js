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
let guess =""
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
const pushedIntoCorrectSpot = (string) => {
    for (let i = 0; i< solution.length; i++){
      if (string === solution[i]){
        progress.splice(i, 1, string)
      }
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
const hangman = () => {
    let userGuess = guess.toLowerCase().trim()
    if(letterCorrect(userGuess) === true){
      pushedIntoCorrectSpot(userGuess)
      document.getElementById("message").innerHTML = ("You guessed correct! Guess Again?")
      document.getElementById("lives").innerHTML = (`${pLives} lives`)
      if(isSolutionCorrect() === true){
       console.log("You guessed the word!")
       console.log("Play Again?")
       document.getElementById("message").innerHTML = ("You guessed the word! <br> Play Again?")
       resetBoard()
      } else {
        console.log(progress.toString())
        document.getElementById("guessedWords").innerHTML = (progress.toString().replace(/,/g, ' '))
      }
    }
    else {
      if(pLives > 2){
        console.log("Wrong Letter. Try Again")
        pLives = pLives - 1
        console.log(`You have ${pLives} lives left`)
        document.getElementById("message").innerHTML = (`Wrong Letter. Try Again <br> You have ${pLives} lives left`)
        console.log(solution)
        console.log(progress.toString())
        document.getElementById("guessedWords").innerHTML = (progress.toString().replace(/,/g, ' '))
        document.getElementById("lives").innerHTML = (`${pLives} lives`)
      } else if (pLives === 2){
        console.log("Wrong Letter. Try Again")
        pLives = pLives - 1
        console.log(`You have ${pLives} life left`)
        console.log(solution)
        console.log(progress.toString())
        document.getElementById("guessedWords").innerHTML = (progress.toString().replace(/,/g, ' '))
        document.getElementById("lives").innerHTML = (`${pLives} life`)
      } else{
        console.log('Ran out of Lives. Try again with a new word!')
        document.getElementById("message").innerHTML = (`Ran out of Lives. Try again with a new word!`)
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