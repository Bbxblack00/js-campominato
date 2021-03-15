// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// function zone

function randomNum() {
  var min = 1;
  var max = (100 - min) + 1;
  var rNum = [];
  var temp;
  for (var x = 0; i < 16; x++) {
    temp = Math.floor(Math.random() * max) + 1;
    for (var i = 0; i < rNum.length; i++) {
      if (temp == rNum[i]) {
        temp = Math.floor(Math.random() * max) + 1;
      }
    rNum.push(temp);
    }
  }
  return rNum;
}


var arrRnd = randomNum();
console.log(arrRnd);
