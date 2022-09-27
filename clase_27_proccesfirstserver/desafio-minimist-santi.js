const parseArgs = require('minimist') //parseArgs, es para parsear los argumentos


const options = {
    default: {
        modo: 'prod',
        puerto: 0,
        debug: false
    }
}

options.alias = {
    m: 'modo',
    p: 'puerto',
    d: 'debug',
    _: 'otros'
}

const args = parseArgs(process.argv.slice(2), options)

console.log(args)