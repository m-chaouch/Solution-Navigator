
//Objektfabriken
// Prototyp für Person
function Person(name) {
    this.name = name;
    this.autos = []; 
  }
  
  // Prototyp für Auto
  function Auto(hersteller, modell) {
    this.hersteller = hersteller;
    this.modell = modell;
  }

  function conflict(person1, person2){
    for(var i=0; i < person1.autos.length; i++){
        for(var j=0; j < person2.autos.length; j++){
            if (person1.autos[i] == person2.autos[j]){
                return true;
            }
        }
    }
    return false;
  }

var person1 = new Person("PersonA");
var person2 = new Person("PersonB");

var Audi = new Auto("Audi","Etron GT");
var BMW = new Auto("BMW","M5CS");

person1.autos.push(BMW);
person2.autos.push(BMW);

conflict(person1,person2);      //true

