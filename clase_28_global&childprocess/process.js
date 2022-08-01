console.log(`
    Directorio actual: ${process.cwd()}
    Id del proceso: ${process.pid},
    Version de node: ${process.version},
    Ruta del ejecutable: ${process.execPath},
    Sistema operativo: ${process.platform},
    Uso de la memoria: ${JSON.stringify(process.memoryUsage())},
`);

const version = Number(process.version.substring(0, 3).replace("v", "")); //le mandamos la posicion inicial y el numero de caracteres queremos que tome.

if (version < 13) {
  console.log("Necesitas actualizar la version de node");
  process.exit(0);
}

process.on("beforeExit", (code) => {
  console.log(`El proceso esta a punto de finalizar: ${code}`);
  setTimeout(() => {}, 2000);
});

process.on("exit", (code) => {
  console.log(`El proceso finalizo con código de salida:: ${code}`);
});

for (let i = 0; i < 1000; i++) {
  console.log(i);
  if (i === 500) {
    // process.exit();
  }
}

setTimeout(() => {
    console.log(`Log con delay de 500ms`)
}, 500);