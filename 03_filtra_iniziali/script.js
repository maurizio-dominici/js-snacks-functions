/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const serchedChar = "A";

// Dichiara la funzione qui.
function filterByInitials(namelist, serchedInitial) {
  const filteredNames = [];

  for (let i = 0; i < namelist.length; i++) {
    const currentNmae = namelist[i];

    if (currentNmae[0] === serchedInitial) {
      filteredNames.push(currentNmae);
    }
  }

  return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console
filterByInitials(names, serchedChar);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(filterByInitials(names, serchedChar));
