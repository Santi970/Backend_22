const envObj = {
  modo: process.env.MODO || 'prod',
  puerto: Number(process.env.PUERTO) || '0',
  debug: Boolean(process.env.DEBUG) || 'false',
}

console.log(envObj);