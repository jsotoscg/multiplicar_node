const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        demand: true,
        alias: 'm',
        default: 3
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola las talas de multiplicar', { opts })
    .command('crear', 'Genera un archov con la tala de multiplicar', { opts }).help()
    .argv;

module.exports = {
    argv
}