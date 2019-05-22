import { buildGraph } from './10_1_graph.js';

const a = "Alice's House";
const b = "Bob's House";
const c = 'Cabin';
const d = 'Post Office';
const e = 'Town Hall';
const f = "Daria's House";
const g = "Ernie's House";
const h = "Grete's House";
const i = 'Farm';
const j = 'Shop';
const m = 'Marketplace';

const roads = [
    [a, b],
    [a, c],
    [a, d],
    [b, e],
    [f, g],
    [f, e],
    [g, h],
    [h, i],
    [h, j],
    [m, i],
    [m, d],
    [m, j],
    [m, e],
    [j, e],
];

const roadGraph = buildGraph(roads);
console.log(roadGraph);
