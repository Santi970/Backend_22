const process =  () => {
    console.log('Esperando el setTimeout, en 5 segundos...')
}

process()

setTimeout(process, 5000)


console.log('Se llama despues del setTimeOut, se ejecuta ahora')