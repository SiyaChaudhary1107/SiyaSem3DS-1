const fs = require("fs").promises;

async function writeFile() {
    try {
        await fs.writeFile('section1.txt', 'Life is good', 'utf8');
        console.log('File written successfully.');
    } catch (err) {
        console.error('Error writing file:', err);
    }
}
writeFile();
 async function readFile() {
    try {
        const data = await fs.readFile('section1.txt',  'utf8');
        console.log('File Content.');
        console.log(data);
    } catch (err) {
        console.error('Error writing file:', err);
    }
}
readFile();

//update
 async function appendFile() {
    try {
        await fs.appendFile('section1.txt', "\nWelcome to FSD");
        console.log('File Content.');
        console.log("Data append successfully");
    } catch (err) {
        console.error('Error writing file:', err);
    }
}
appendFile();
 