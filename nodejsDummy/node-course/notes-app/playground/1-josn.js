const book = {

    tilte: 'Ego is the enemy',
    author: 'Paramasivam'
}

const bookJson = JSON.stringify(book);
console.log(bookJson);

const parsedBook = JSON.parse(bookJson);
console.log(parsedBook.author);

const fs = require('fs');
fs.writeFileSync('1-json.json', bookJson);