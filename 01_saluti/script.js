/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
function helloUser(name) {
  let saluto = "ciao";
  return saluto + " " + name;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(helloUser(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
