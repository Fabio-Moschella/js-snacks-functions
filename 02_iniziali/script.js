/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function initialNamesOfTheArray(namesArray) {
  //let newArray = [namesArray[0][0],namesArray[1][0],];
  let newArray = [];
  for (let i = 0; i < namesArray.length; i++) {
    newArray.push(namesArray[i][0]);
  }
  return newArray;
}
console.log(initialNamesOfTheArray(names));
// Invoca la funzione qui e stampa il risultato in console
//const initialNamesOfTheArray(names);
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
