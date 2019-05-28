const MOUNTAINS = [
    { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
    { name: 'Everest', height: 8848, place: 'Nepal' },
    { name: 'Mount Fuji', height: 3776, place: 'Japan' },
    { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
    { name: 'Denali', height: 6168, place: 'United States' },
    { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
    { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

const div = document.getElementById('mountains');
const table = document.createElement('table');
const tableTitle = Object.keys(MOUNTAINS[0]);

div.appendChild(table);

tableTitle.forEach(title => {
    table.innerHTML += `<tr><th>${title}</th></tr>`;
});

MOUNTAINS.forEach(mountain => {
    table.innerHTML += `<tr>
    <th>${mountain.name}</th>
    <th>${mountain.height}</th>
    <th>${mountain.place}</th>
    </tr>`;
});
