const fs = require('fs');
fs.writeFile(
    'sample.txt','welcome to full stack development',(err) =>{
      if (err){
        console.log('error creating file: ', err);
        return;
      } 
      console.log('file created successfully');
    }
)

fs.readFile('sample.txt', 'utf-8', (err,data) =>{
    if (err){
        console.log('error reading file', err);
        return;
    }
    console.log('file created');
    console.log(data);
})

fs.appendFile('sample.txt','\n new update', (err) =>{
if(err){
    console.log('error updating file', err);

}else{
    console.log('\n3. File updated Successfully!');
}
} )

fs.readFile('sample.txt', 'utf-8', (err,data)=>{
    if(err){
        console.log('error reading file', err);
        return;
    }
    console.log('file created successfully');
    console.log(data);
})

fs.unlink('example.txt', (err)=>{
    if(err){
        console.log('error deleting file', err);
        return;
    }
    console.log('file deleted successfully!');
})