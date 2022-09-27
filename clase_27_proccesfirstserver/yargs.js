const yargs = require('yargs/yargs')

const args = yargs(process.argv.slice(2))
  .alias({
    nombre: 'n'
  })
  .default({
    nombre: 'Santi',
    apellido: 'Cendra'
  })
  .boolean('ayuda')
  .argv

console.log({ args })