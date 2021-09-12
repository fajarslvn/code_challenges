const isEqualTo100 = (a, b) => a === 100 || b === 100 || a + b === 100;

// Test code
console.log(isEqualTo100(100, 50));
console.log(isEqualTo100(10, 100));
console.log(isEqualTo100(70, 30));
console.log(isEqualTo100(30, 30));
console.log(isEqualTo100(100, 100));
