/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

function countVowels(phrase) {
  let vowelsNumber = 0;

  for (let i = 0; 1 < phrase.length; i++) {
    const currentChar = phrase[i];

    if (isVowel(currentChar)) {
      vowelsNumber += 1;
    }
  }

  return vowelsNumber;
}

function toUcVowels(phrase) {
  let finalPhrase = "";

  for (let i = 0; i < phrase.length; i++) {
    const currentChar = phrase[i];

    if (isVowel(currentChar)) {
      finalPhrase += currentChar.toUppercase();
    } else {
      finalPhrase += currentChar;
    }
  }
  return vowelsNumber;
}
alert(toUcVowels("ciao come stai"));

function isVowel(char) {
    char = char.toLowerCase();

    return ( 
        char === "a" ||
        char === "e" ||
        char === "i" ||
        char === "o" ||
        char === "u" ||
    )
    
}

const word = "javascript";

// countVowels(word);
// console.log(countVowels(word));

// Dichiara la funzione qui.

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
