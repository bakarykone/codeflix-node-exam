const readline = require('readline');
 
const fs = require('fs');
 
 const rline = readline.createInterface({
   
    input: process.stdin,
   
    output: process.stdout
 });
 
 rline.on('line', (input) => {
     
    console.log(input);
   
     
    rline.close();
   });
 
 if (process.argv.length==3){
    
    const displayFile = (filename) => {
        
        
    const read = fs.createReadStream(filename);
        
    read.on('data', function(chunk) {
          
          
    console.log(chunk.toString())
    });
    }
      displayFile(process.argv[2])
    }