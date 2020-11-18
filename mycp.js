let args = process.argv.splice(2,process.argv.length-1);

let it = require('fs')

if(args.length == 2) {
    
    if(it.existsSync(args[0])) {

        if(it.existsSync(args[1])) {

            it.copyFile(args[0], args[1], (err) => {
               
                if (err) throw err;
               
                console.log(`${args[0]} a été copié dans ${args[1]} `);
            });

        } else {

            it.rename(args[0], args[1], (err) => {
                
                if (err) throw err;
                
                console.log(`${args[0]} a été copié dans ${args[1]} `);
            });

        }

    } else {

        console.log(`Le fichier : ${args[0]} n\'existe pas`);
    }
}
