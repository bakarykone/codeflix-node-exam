const readline = require("readline");

const fs = require("fs");

let arg = process.argv.splice(2, process.argv.length - 1);

const rline = readline.createInterface({
  
    input: process.stdin,
  
    output: process.stdout,
});

rline.on("line", (input) => {
  console.log(input);

  rline.close();

});

if (process.argv.length == 3) {
 
    const displayFile = (filename) => {
    
        const read = fs.createReadStream(filename);
    
        read.on("data", function (chunk) {
      
    console.log(chunk.toString());
    });
  };
  displayFile(process.argv[2]);
} 

else if (arg.length == 2) {
 
    if (arg[0] == "-e") {
    
        let rline = readline.createInterface({
      
            input: fs.createReadStream(arg[1], "utf8"),
    });

    rline.on("line", function (line) {
      
        console.log(line + "$");
    });

  } 
  else {
    
    console.log("Commande fausse");
  }
}