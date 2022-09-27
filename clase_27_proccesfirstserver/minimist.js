const parseArgs = require('minimist') //parseArgs, es para parsear los argumentos

const args = parseArgs(process.argv.slice(2)) //sacamos los primeros dos argumentosno

console.log(args)

console.log(parseArgs(['-a', '1', '-b', '2', '3', '4']))

console.log(parseArgs(['--n1', '1', '--n2', '2']))

console.log(parseArgs(['-a', '1', '-b', '2', '-c', '-d']))

const options = {
  default: {
    nombre: 'Santiago',
    apellido: 'Cendra ',
    c: false
  }
}

console.log(parseArgs(['-a', '1', '-b', '-c', '--nombre', 'Juan'], options)) //

options.alias = {
  a: 'campoA',
  b: 'campoB'
}

console.log(parseArgs(['-a', '1', '-b', '-c'], options))

console.log(parseArgs(process.argv.slice(2), options))
