const  argv  = require('./config/yargs');
const {crearArchivoTB} = require('./helpers/multiplicar');

//const base = 1;




   

  // const[, , arg3 = 'base=6']=process.argv;
   //const [ , base]=arg3.split('=');
  console.log(process.argv);
  console.clear();
  console.log(argv);
  
   console.log('base: yargs',argv.base);

crearArchivoTB(argv.b,argv.l)
  .then(salida => console.log('Archivo creado', salida))
  .catch(err => console.log(err));


