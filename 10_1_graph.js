export function buildGraph(edges) {
    const graph = Object.create(null);

    edges.forEach(edge => {
        addEdge(graph, edge);
    });

    return graph;
}

function addEdge(graph, edge) {
    const [from, to] = edge;

    if (graph[from] == null) {
        graph[from] = [to];
    } else {
        graph[from].push(to);
    }
}
