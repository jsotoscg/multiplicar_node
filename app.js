//const { constants } = require("buffer");

// const multi = require('./multiplicar/multiplicar')

// let base = 5;

// multi.crearArchivo(base)
//     .then(archivo => console.log(`Achivo creado :: ${archivo}`))
//     .catch(err => console.log(err));

const argv = require('./config/yargs').argv;

const { constants } = require("buffer");

const multi = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(`LISTAR ${argv.base} -> ${argv.limite}`);
        multi.listar(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('CREAR');
        console.log(` base ${argv.base} :: max ${argv.limite}`);
        multi.crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Achivo creado :: ${archivo}`))
            .catch(err => console.log(err));
        break;
    case 'modificar':
        console.log('MODIFICAR');
        break;
    case 'eliminar':
        console.log('ELIMINAR');
        break;
    default:
        console.log('COMANDO NO RECONOCIDO...');
}
console.log(argv);

// let argv2 = process.argv;
// console.log(`Base = ${argv.base}, limite= ${argv.limite}`);


// console.log(process.argv);
// let params = process.argv[2];
// let base = params.split('=')[1];

// multi.crearArchivo(base)
//     .then(archivo => console.log(`Achivo creado :: ${archivo}`))
//     .catch(err => console.log(err));