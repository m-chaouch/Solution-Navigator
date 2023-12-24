class Vorrang {
    
    constructor(matrix) {
      this.graph = new Map();
      this.inDegree = new Map();
      this.computed = false;    //für lazy computation
      this.proxyObjekt = this.createProxy();
      this.logger = new Map();

    //   this.target = new Map(); //die Reihenfolge für den Proxy

      matrix.forEach(([from, to]) => {    // initialisierung von dem Graphen(graph) und dem Eingangsgrad(inDegree)
        if (!this.graph.has(from)) this.graph.set(from, []);  // extra Array damit wir ganz einfach dessen Methoden wie push() und shift() nutzen können
        if (!this.graph.has(to)) this.graph.set(to, []);
  
        if (!this.inDegree.has(from)) this.inDegree.set(from, 0);
        if (!this.inDegree.has(to)) this.inDegree.set(to, 0);
  
        this.graph.get(from).push(to);  // to wird in den Array von from eingefügt
        this.inDegree.set(to, this.inDegree.get(to) + 1);   // erhöhre Eingangsgrad um 1
      });
  
      this.sortedTasks = null; // topologische Sortierung speichern, damit wir nicht noch einmal sortieren müssen
      this.currentIdx = 0; // Zeiger auf das aktuelle Element bei next()
    }
    
  
    topsort() {
      const result = [];
      const queue = [];
  
      this.inDegree.forEach((degree, task) => { // wichtig: zuerst Wertübergabe, dann den Schlüssel(task)
        if (degree == 0) {  // Weil kein anderer auf einen zeigt, dann kann man sich in die queue tun
          queue.push(task);
        }
  
      });
  
      while (queue.length > 0) {  // Depth First Search (dfs)
        const current = queue.shift();  // Die shift() Methode entnimmt das erste Element und sorgt dafür, dass die darauffolgenden Elemente aufrücken
        result.push(current);
  
        if (this.graph.has(current)) {
          for (const neighbor of this.graph.get(current)) {
            this.inDegree.set(neighbor, this.inDegree.get(neighbor) - 1);
            if (this.inDegree.get(neighbor) == 0) {
              queue.push(neighbor);
            }
          }
        }
  
      }
  
      if (result.length != this.graph.size){
        console.error("Es liegt ein Zyklus vor. Topologische Sortierung nicht möglich!");
        return [];
      }
  
      return result;
    }
    
    *Vorrangit() {  //Generatorfunktion (mit * markiert)
        if(!this.computed){
            this.sortedTasks = this.topsort();
            this.computed = true;
        }
        while(this.currentIdx < this.sortedTasks.length){
            this.logger.set(this.sortedTasks[this.currentIdx],this.currentIdx);
            yield this.sortedTasks[this.currentIdx++];
        }
    }

    createProxy(){
        return new Proxy(this, {
            get: (target,property) => {
                if (this.computed == false){
                    return "Noch nicht sortiert!"
                }else{
                    return property === "logger" ? "Noch " + ((this.sortedTasks.length - this.currentIdx)+1) + " Tasks übrig." :  "Logger nicht ausgewählt!";   // +1 weil wir next bereits zum Sortieren aufgerufen haben (nochmal Verinnerlichen)
                }
            }

        });
    }
    
  }



  // besonderer Usecase von Generators: Infinite Loops. while(true) führt nämlich zum Absturz des Programms
  
  // kleiner test
  const studentenLeben = new Vorrang([
    ["schlafen", "studieren"],
    ["essen", "studieren"],
    ["studieren", "prüfen"]
  ]);
  
  const solution = ["schlafen", "essen", "studieren", "prüfen"];
  let Vorranggen = studentenLeben.Vorrangit();
  Vorranggen.next();
  console.log(studentenLeben.proxyObjekt.logger);
  Vorranggen.next();
  console.log(studentenLeben.proxyObjekt.logger);
  Vorranggen.next();
  console.log(studentenLeben.proxyObjekt.logger);
  Vorranggen.next();
  console.log(studentenLeben.proxyObjekt.logger);



//  console.log(Vorranggen.next());
//  console.log(Vorranggen.next());
//  console.log(Vorranggen.next());
//  console.log(Vorranggen.next());
//  console.log(Vorranggen.next());

  