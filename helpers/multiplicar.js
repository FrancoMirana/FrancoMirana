//██╗███╗   ██╗███████╗██╗███╗   ██╗██╗████████╗██╗   ██╗███╗   ███╗       ███████╗ ██████╗██╗    ████████╗███████╗ ██████╗██╗  ██╗
//██║████╗  ██║██╔════╝██║████╗  ██║██║╚══██╔══╝██║   ██║████╗ ████║       ██╔════╝██╔════╝██║    ╚══██╔══╝██╔════╝██╔════╝██║  ██║
//██║██╔██╗ ██║█████╗  ██║██╔██╗ ██║██║   ██║   ██║   ██║██╔████╔██║ █████╗███████╗██║     ██║█████╗ ██║   █████╗  ██║     ███████║
//██║██║╚██╗██║██╔══╝  ██║██║╚██╗██║██║   ██║   ██║   ██║██║╚██╔╝██║ ╚════╝╚════██║██║     ██║╚════╝ ██║   ██╔══╝  ██║     ██╔══██║
//██║██║ ╚████║██║     ██║██║ ╚████║██║   ██║   ╚██████╔╝██║ ╚═╝ ██║       ███████║╚██████╗██║       ██║   ███████╗╚██████╗██║  ██║
//╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝    ╚═════╝ ╚═╝     ╚═╝       ╚══════╝ ╚═════╝╚═╝       ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝



const { rejects } = require('assert');
const { error } = require('console');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivoTB = (base,listar)=>{
   
const n = 10;
let salida ='';

    for (let i = 1; i <= n; i++) {
    
        salida += ` ${base} x ${i} = ${i*base} \n`
    
    }
    if (listar == true) {
        console.log(salida);
    }
    
    return promesa = new Promise((resolve,rejects)=>{
       
        try {
            fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
            const nombrearchivo =`tabla-${base}.txt`;
            resolve(nombrearchivo)
        } catch (error) {
           
            console.log('no se pudo crear la tabla');
            rejects(error)
        }
       
            
        
    })
   

}


module.exports = {
    crearArchivoTB
}




    
