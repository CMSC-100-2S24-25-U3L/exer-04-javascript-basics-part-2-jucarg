// imports index.js file
const { generateUniqueID, addAccount } = require('./index.js');

console.log(generateUniqueID("Alan", "Turing"));
console.log(addAccount("Alan", "Turing", "aturing@w3c.com", 15)); // false
console.log(addAccount("Alan", "Turing", "", 15)); //false

console.log(generateUniqueID("Gracy", "deGuzman"));
console.log(addAccount("Gracy", "deGuzman", "medeguzman@up.edu.ph", 19));
