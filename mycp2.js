let arg = process.argv.splice(2,process.argv.length-1);

let it = require('fs')

if(arg.length == 2) {
    
    if(it.existsSync(arg[0])) {

        if(it.existsSync(arg[1])) {

            it.copyFile(arg[0], arg[1], (err) => {
                
                if (err) throw err;
                
                console.log(`${arg[0]} a été copié dans ${arg[1]} `);
            });

        } else {

            
            it.rename(arg[0], arg[1], (err) => {
            
                if (err) throw err;
            
                console.log(`${arg[0]} a été copié dans ${arg[1]} `);
            });

        }

    } else {

        console.log(`Le fichier : ${arg[0]} n\'existe pas`);
    }
}

else if(arg.length == 3) {
    
    if(arg[0] == '-r') {
    
        if(it.existsSync(arg[1])) {

            var mkdir = function(dir) {
    
                try {
    
                    it.mkdirSync(dir, 0755);
    
                } catch(a) {
    
                    if(a.code != "EXISTANT") {
    
                        throw a;
                    }
                }
            };

            mkdir(arg[2]);
    
            let files = tx.readdirSync(arg[1]);

            for(var i = 0; i < files.length; i++) {
    
                var current = it.lstatSync(path.join(src, files[i]));
    
                if(current.isDirectory()) {
    
                    copyDir(path.join(src, files[i]), path.join(dest, file1[i]));
    
                } else if(current.isSymbolicLink()) {
    
                    var symlink = it.readlinkSync(path.join(src, files[i]));
    
                    it.symlinkSync(symlink, path.join(dest, files[i]));
    
                } else {
    
                    copy(path.join(src, files[i]), path.join(dest, files[i]));
                }
            }

        } else {

            console.log(`Le dossier : ${arg[1]} n\'existe pas`);
        }
    } else {

        console.log('Commande inconnue');
    }
} 

else {
    console.log('Commane inconnue')
}