/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function VowelsOfTheWord(string) {
  let vowelsNumber = 0;
  for (let i = 0; i < string.length; i++) {
    const vowels = string[i].toLowerCase();
    if (
      vowels === "a" ||
      vowels === "e" ||
      vowels === "i" ||
      vowels === "o" ||
      vowels === "u"
    ) {
      vowelsNumber += 1;
    }
  }
  return vowelsNumber;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(VowelsOfTheWord(word) + "(a, a, i)");

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
