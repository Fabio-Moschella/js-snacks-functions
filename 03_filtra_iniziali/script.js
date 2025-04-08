/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const char = "A";

// Dichiara la funzione qui.
function namesList(name, letter) {
  const newArray = [];
  let ucLetter = letter.toUpperCase();
  for (let i = 0; i < name.length; i++) {
    firstCharName = name[i];

    if (firstCharName[0] === ucLetter) {
      newArray.push(firstCharName);
    }
  }
  return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(namesList(names, char));
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
