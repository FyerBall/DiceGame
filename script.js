let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomNumber2 = Math.floor(Math.random() * 6) + 1

function diceRoller() {
  document.querySelector('.dice1').src = `/images/dice${randomNumber1}.svg`
  document.querySelector('.dice2').src = `/images/dice${randomNumber2}.svg`
  if (randomNumber1 === randomNumber2) {
    document.querySelector('h1').textContent = 'It is a Tie'
    console.log(
      `The numbers are ${randomNumber1}  and  ${randomNumber2} and it is a tie`
    )
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = 'Player 1 Wins'
    document.querySelector('.player1').style.color = '#fb7813'
    console.log(
      `The numbers are ${randomNumber1}  and  ${randomNumber2} and the winner is  player 1 `
    )
  } else {
    document.querySelector('h1').textContent = 'Player 2 Wins'
    document.querySelector('.player2').style.color = '#fb7813'
    console.log(
      `The numbers are ${randomNumber1}  and  ${randomNumber2} and the winner is player 2  `
    )
  }
}
console.log(randomNumber1)
console.log(randomNumber2)
diceRoller()
