function topsort(matrix) {
    const graph = new Map();
    const inDegree = new Map();


    // Initialisiere den Graphen und den Eingangsgrad für jeden Task.
    matrix.forEach(([from, to]) => {
        if (!graph.has(from)) graph.set(from, []);
        if (!graph.has(to)) graph.set(to, []);
        if (!inDegree.has(from)) inDegree.set(from, 0);
        if (!inDegree.has(to)) inDegree.set(to, 0);

        graph.get(from).push(to);
        inDegree.set(to, inDegree.get(to) + 1);
    });

    const result = [];
    const queue = [];

    // Füge Tasks ohne Eingangsgrad zur Queue hinzu.
    inDegree.forEach((degree, task) => {
        if (degree === 0) {
            queue.push(task);
        }
    });

    // Führe die topologische Sortierung durch.
    while (queue.length > 0) {
        const current = queue.shift();
        result.push(current);

        // Reduziere den Eingangsgrad der Nachfolger.
        if (graph.has(current)) {
            for (const neighbor of graph.get(current)) {
                inDegree.set(neighbor, inDegree.get(neighbor) - 1);
                if (inDegree.get(neighbor) === 0) {
                    queue.push(neighbor);
                }
            }
        }
    }

    // Überprüfe auf Zyklus.
    if (result.length !== graph.size) {
        console.error("Der Graph enthält einen Zyklus. Topologische Sortierung nicht möglich.");
        return [];
    }

    return result;
}



// var matrix = [["schlafen","studieren"],["essen","studieren"],["studieren","prüfen"]];
// topsort(matrix);
// console.assert(["schlafen","essen","studieren","prüfen"],topsort(matrix));