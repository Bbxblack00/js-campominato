// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// zona funzioni

function randomNum() {
  var min = 1;
  var max = (100 - min) + 1;
  var rNum = Math.floor(Math.random()* max) + 1;
  return rNum;
}

function comparison(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    while (arr[i] == num) {
      num = randomNum();
    }
  }
  return num;
}

function mineGame(mines) {
  var counter;
  var userNum;
  var boolean1;
  var boolean2;
  var numbers = [];

  for (var i = 0; i < 84; i++) {
    counter = i + 1;
    userNum = parseInt(prompt('inserisci un numero da 1 a 100'));
    boolean1 = numbers.includes(userNum);
    boolean2 = mines.includes(userNum);
    if (boolean1) {
      console.log('hai già inserito questo numero');;
      --i;
    } else {
      numbers.push(userNum);
    }

    if (boolean2) {
      return 'hai preso una mina, punteggio totale: ' + counter + 'bombe = ' + mines;
    }
  }
  return 'hai vinto con il punteggio massimo, bombe =' + mines;
}

// zona variabali e input

var minefield = [];
var temp;




// zona calcoli principali

for (var i = 0; i < 16; i++) {
  temp = randomNum();
  mine = comparison(minefield, temp);
  minefield.push(mine);
}

var result = mineGame(minefield);

// output
document.getElementById('tit1').innerHTML = result;
console.log(result);
