class Vorrang {
  constructor(matrix) {
    this.graph = new Map();
    this.inDegree = new Map();
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

  [Symbol.iterator]() { // Iterationsprotokoll
    let computed = false; // Mit dieser Flag gucken wir bevor wir die Reihenfolge berechnen, ob wir die Reihenfolge schonmal berechnet haben

    return {
      next: () => {
        if (!computed) {          // sortiere topologisch nur, wenn noch NICHT bereits sortiert wurde, siehe Computed-Flag (Lazy-Computation)
          this.sortedTasks = this.topsort();
          computed = true;
        }

        if (this.currentIdx < this.sortedTasks.length){  // Wenn noch was auszugeben ist, iteriere weiter
          return { value: this.sortedTasks[this.currentIdx++], done: false }; // ganz wichtig: value und done zurückgeben 
        }else{
          return { done: true };
        }
      },
    };
  }
}

// kleiner test
const studentenLeben = new Vorrang([
  ["schlafen", "studieren"],
  ["essen", "studieren"],
  ["studieren", "prüfen"]
]);

const solution = ["schlafen", "essen", "studieren", "prüfen"];
let i = 0;
for (const next of studentenLeben) {
  console.assert(next == solution[i++], "Fehler in der Reihenfolge");
}
