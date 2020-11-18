const expression = require('readline');

const rline = expression.createInterface({
    
    input: process.stdin,

    output: process.stdout
});

rline.question('je dupplique :', (réponse) => {
  
  console.log(`${réponse}`);

  rline.close();
});

