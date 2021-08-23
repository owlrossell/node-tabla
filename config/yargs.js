const argv = require('yargs')
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            description: 'Número base para la tabla de multiplicar'
        },
        'l': {
            alias: 'list',
            type: 'boolean',
            default: false,
            description: 'Parámetro lógico para listar en pantalla'
        },
        'u': {
            alias: 'until',
            type: 'number',
            demandOption: true,
            description: 'Número límite para la tabla de multiplicar'
        }
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un número"
        }
        return true
    })
    .check((argv, options) => {
        if(isNaN(argv.u) ){
            throw "El límite debe ser un número"
        } else {
            if(argv.u<=0) {
                throw "El límite debe ser mayor que 0"
            }
        }
        return true
    })
    .argv

module.exports = argv