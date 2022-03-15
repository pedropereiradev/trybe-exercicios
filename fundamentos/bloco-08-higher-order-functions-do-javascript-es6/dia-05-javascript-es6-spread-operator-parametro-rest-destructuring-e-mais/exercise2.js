const sum = (...values) => values.reduce((acc, curr) => acc + curr, 0);

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 10, 25, 64, 89, 1, 0, 15));
