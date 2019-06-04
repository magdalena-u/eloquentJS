export function buildGraph(edges) {
    const graph = {};

    edges.forEach(edge => {
        const [from, to] = edge;

        if (!graph[from]) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    });

    return graph;
}
