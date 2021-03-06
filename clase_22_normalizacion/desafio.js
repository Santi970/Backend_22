const normalizr = require('normalizr')
const fs = require('fs')
const util = require('util')

function print(objeto) {
  console.log(util.inspect(objeto,false,12,true))
}

/**
 * Tenemos una entidad principal Empresa
 * Dentro de empresa tenemos una arreglo de entidad Empleado
 * Dentro de la entidad empleado tenemos una entidad Puesto
 * Dentro de la entidad empleado tenemos una entidad Area
 * 
 */
const empresa = require('./empresa.json')

const areaSchema = new normalizr.schema.Entity('area')

const puestoSchema = new normalizr.schema.Entity('puesto')

const empleadoSchema = new normalizr.schema.Entity('empleados', {
 area: areaSchema,
 puesto: puestoSchema
})

const empresaSchema = new normalizr.schema.Entity('empresa', {
  empleados: [ empleadoSchema ]
})

const normalizedEmpresa = normalizr.normalize(empresa, empresaSchema)

const denormalizedEmpresa = normalizr.denormalize(normalizedEmpresa.result, empresaSchema, normalizedEmpresa.entities)


console.log({
  empresa: JSON.stringify(empresa).length, 
  normalizedEmpresa: JSON.stringify(normalizedEmpresa).length,
  denormalizedEmpresa: JSON.stringify(denormalizedEmpresa).length,
})

print(empresa)
print(normalizedEmpresa)
print(denormalizedEmpresa)

fs.promises
  .writeFile('./empresaNormalized.json', JSON.stringify(normalizedEmpresa, null, 2))
  .then(_ => console.log('ok'))

fs.promises
  .writeFile('./empresaDenormalized.json', JSON.stringify(denormalizedEmpresa, null, 2))
  .then(_ => console.log('ok'))