
let RandomNumber1 = Math.floor(Math.random() * 6) + 1

let RandomDiceImage = 'assets/dice' + RandomNumber1 + '.png'

let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', RandomDiceImage)

let RandomNumber2 = Math.floor(Math.random() * 6) + 1
let RandomDiceImage2 = 'assets/dice' + RandomNumber2 + '.png'
let image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', RandomDiceImage2)

if (RandomNumber1 > RandomNumber2) {
  document.querySelectorAll('h1')[1].innerHTML = '🏆 jogador 1 Ganhou'
}else if(RandomNumber2 > RandomNumber1) {
  document.querySelectorAll('h1')[1].innerHTML = '🏆 jogador 2 Ganhou'
}else {
  document.querySelectorAll('h1')[1].innerHTML = 'Empate'
}
