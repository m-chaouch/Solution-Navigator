let Atext;
let Btext;


// Erster fetch-Aufruf
const promiseA = fetch('http://127.0.0.1:5500/A.txt')
  .then(response => response.text())
  .then(data => {
    Atext = data;
    // seeAtext()
    let Aarr = Atext.split('\n').map(line => line.trim());  // map wird genutzt um die Zeilenumbrüche die noch drin sind zu entfernen!
    return Aarr;
  })
  .catch(error => console.error("Fehler bei der Fetch-Anfrage von A.txt", error));


 const promiseB = fetch('http://127.0.0.1:5500/B.txt')
  .then(response => response.text())
  .then(data => {
    Btext = data;
    // seeBtext()
    let Barr = Btext.split('\n').map(line => line.trim()); // map wird genutzt um die Zeilenumbrüche die noch drin sind zu entfernen!
    return Barr;
  })
  .catch(error => console.error("Fehler bei der Fetch-Anfrage von B.txt", error));




function doWork(){ // wartet auf die Ergebnisse der promises, dann mache..
  return Promise.all([
      promiseA,   // Wiederholung: Die Reihenfolge die ich hier angebe, ist die des Empfang der Ergebnisse im then
      promiseB
  ]).then(([arrA,arrB]) => {
      let result = '';
      for(let i = 0; i < arrB.length; i++){
          result += arrA[i];
          result += arrB[i];
          result += '\n';
      }
      return result;
  });
}


function seeAtext(){
  return Atext;
}

function seeBtext(){
  return Btext;
}

