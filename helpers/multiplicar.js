const fs = require('fs')
/*const crearArchivo = async (base = 5) => {
    try {
        console.log('===================')
        console.log(`   Tabla del ${base}  `)
        console.log('===================')
        let salida = ''
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }
        console.log(salida)

        fs.writeFileSync(`tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`
    } catch (err) {
        throw err
    }
}*/

const crearArchivo = async (base = 5, list = false, until = 1) => {
    return new Promise((resolve, reject) => {
        let salida = ''
        for (let i = 1; i <= until; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
        }
        if (list) {
            console.log('==================='.yellow)
            console.log(`   Tabla del ${base}  `)
            console.log('===================')
            console.log(salida)
        }
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        resolve(`tabla-${base}.txt`)
    })
}

module.exports = {
    crearArchivo
}

require('colors')
