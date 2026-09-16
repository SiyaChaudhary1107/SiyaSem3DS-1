const fs = require("fs").promises;
async function writeFile() {
    try {
        await fs.writeFile("promises.txt", "Hello, Students!");
        console.log("File created and data written successfully.");
    } catch (error) {
        console.log("Error: ", error);
    }
}

writeFile();

//read 

async function readFile() {
    try {
        const data = await fs.readFile('promises.txt', 'utf-8');
        console.log("File content: ");
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

readFile();

//append

async function appendFile() {
    try {
        await fs.appendFile("promises.txt", "Appended Successfully");
        console.log("File appended successfully");
    } catch (error) {
        console.log("Error: ", error);
    }
}

appendFile();

//rename

async function renameFile() {
    try {
        await fs.renameFile("promises.txt", "promises_new.txt");
        console.log("File name changed");
    } catch (error) {
        console.log("Error: ", error);
    }
}

renameFile();

//delete

// async function deleteFile(){
//     try{
//         await fs.readFile("promises.txt", "utf-8");
//         console.log("File content read");
//     }catch(error){
//         console.log ("Error: ", error);
//     }
// }