const fs = require('fs');
fs.writeFileSync('student.txt', 'this is experiment no. 2', 'utf-8');
console.log('file has successfully been created')

//read
 
const data = fs.readFileSync('student.txt', 'utf-8');
console.log('File Content: ', data);

//append

fs.appendFileSync('student.txt', '\n This is the new line added');
console.log('file is appended');

const data2 = fs.readFileSync('student.txt', 'utf-8');
console.log('File Content: ', data2);

// fs.unlinkSync('harshit.txt');
// console.log('harshit to giyo!!')

// fs.mkdirSync('sample folder');
// console.log('new folder created');

// fs.rmdirSync('sample folder');
// console.log('folder deleted successfully');

if(fs.existsSync('student.txt')){
    console.log('file exists');
}else{
    console.log('file not found, need to create this file');
}