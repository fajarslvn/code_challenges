const getFileExtension = str => str.split('.').pop();

console.log(getFileExtension('index.js'));
console.log(getFileExtension('index.php.html'));

const getExtension = str => str.slice(str.lastIndexOf('.'));

console.log(getExtension('server.js'));
