const Set = require('./set');

const setA = new Set();

setA.add(1);
setA.add(2);

const setB = new Set();
setB.add(3);

console.log(setA.union(setB));