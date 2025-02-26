/* 
Created by: Maria Gracy E. de Guzman
EXERCISE 4

*/
// Packages used
const { v4: uuidv4 } = require('uuid');
const validator = require('validator');
const fs = require('fs');

function generateUniqueID(firstname, lastname) {
    return `${firstname[0].toLowerCase()}${lastname.toLowerCase()}${uuidv4().slice(0, 8)}`;
}

function addAccount(firstname, lastname, email, age) {
    if (!firstname || !lastname || !email || !age) return false; // false if all fields are not present
    if (!validator.isEmail(email) || age < 18) return false;

    const uniqueID = generateUniqueID(firstname, lastname);
    fs.appendFileSync('users.txt', `${firstname},${lastname},${email},${age},${uniqueID}\n`);
    return true;
}

// exports functions
module.exports = { generateUniqueID, addAccount };
