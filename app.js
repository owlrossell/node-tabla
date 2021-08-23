const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
console.clear()

// console.log(process.argv)
// console.log(argv)

// const [,,arg3 = 'base=5'] = process.argv
// const [,base = 5] = arg3.split('=')
//
crearArchivo(argv.b, argv.l, argv.u)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))