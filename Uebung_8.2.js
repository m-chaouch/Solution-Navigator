let Atext;
let Btext;


// Erster fetch-Aufruf
function AArray(){  // in Funktion getan, damit aufruf in doWork erfolgen kann
    return fetch('http://127.0.0.1:5500/A.txt')       //fetch gibt ein promise zurück
    .then(response => response.text())
    .then(data => {
      Atext = data;
      // seeAtext()
      let Aarr = Atext.split('\n').map(line => line.trim());  // map wird genutzt um die Zeilenumbrüche die noch drin sind zu entfernen!
      return Aarr;
    })
    .catch(error => console.error("Fehler bei der Fetch-Anfrage von A.txt", error));  
}


function BArray(){
    return fetch('http://127.0.0.1:5500/B.txt')
    .then(response => response.text())
    .then(data => {
      Btext = data;
      // seeBtext()
      let Barr = Btext.split('\n').map(line => line.trim()); // map wird genutzt um die Zeilenumbrüche die noch drin sind zu entfernen!
      return Barr;
    })
    .catch(error => console.error("Fehler bei der Fetch-Anfrage von B.txt", error));
}

// Promise.all([
//     promiseA,   // Wiederholung: Die Reihenfolge die ich hier angebe, ist die des Empfang der Ergebnisse im then
//     promiseB
// ]).then(([arrA,arrB]) => {
//     let result = '';
//     for(let i = 0; i < arrB.length; i++){
//         result += arrA[i];
//         result += arrB[i];
//         result += '\n';
//     }
//     console.log(result);
// });



// ^ Mit async/await

async function startAsyncTasks() {
    // mit diesem Ansatz können beide Funktionen parallel zueinander die benötigten Daten fetchen
    const promiseA = AArray();  
    const promiseB = BArray();  

    const arrA = await promiseA;
    const arrB = await promiseB;

    //Wichtig: Mit diesem folgenden Ansatz hätten wir eine sequentielle Ausführung, denn BArray() wird erst ausgeführt, wenn AArray() ein ergebnis hat. await sorgt dafür, dass man auf das Ergebnis eines Promises wartet
    // const arrA = await AArray();    
    // const arrB = await BArray();

    return [arrA, arrB];
}

async function doWork(){    // async sorgt dafür, dass die Funktion ein Promise zurückgibt
    try{
        const [arrA, arrB] = await startAsyncTasks();
        let result = '';
        for(let i = 0; i < arrB.length; i++){
            result += arrA[i];
            result += arrB[i];
            result += '\n';
        }
        return result;
    } catch(err){
        console.log("Es gab einen Fehler!", err);
    }
}

doWork();


function seeAtext(){
    console.log(Atext);
}

function seeBtext(){
    console.log(Btext);
}

