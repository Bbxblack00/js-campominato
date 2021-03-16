
// collaudo funzione randomNum (funziona nel modo corretto)
//
// function randomNum() {
//   var min = 1;
//   var max = (100 - min) + 1;
//   var rNum = Math.floor(Math.random()* max) + 1;
//   return rNum;
// }


// collaudo funzione comparison

// function comparison(arr, num) {
//   for (var i = 0; i < arr.length; i++) {
//     while (arr[i] == num) {
//       num = randomNum();
//     }
//   }
//   return num;
// }

function comparisonBoolean(arr, num) {

  if (arr.length == 0) {
    return true;
  }else {
    var result = arr.includes(num);

    return result;
  }

}


var array = [1];
var numero = 7;



var result = comparisonBoolean(array, numero);

console.log(result);
