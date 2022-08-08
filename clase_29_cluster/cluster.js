const cluster = require('cluster') //requerimos cluster
const http = require('http') //levantamos servidor http. (es sensillo por eso no usamos express) 

const numCPUs = require('os').cpus().length //traemos el numero de procesadores que tenemos. 

console.log({ numCPUs })

if (cluster.isMaster) {
    console.log(`Nodo primario ${process.pid} corriendo`)
  
    for( let i = 0; i < numCPUs; i++) {
      cluster.fork()
    }
    
    cluster.on('exit', (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} finalizado`)
    })
  } else {
    console.log(`Nodo worker corriendo en el proceso ${process.pid}`)
  
    const PORT = process.argv[2] || 8080
    
    http.createServer((req, res) => {
      res.writeHead(200) //para writeHead escribir el status
      res.end(`Process: ${process.pid}`)
    }).listen(PORT)
  }
// Para matar los procesos
//kill -9 61853
  
  
//Ver todos los puertos que estan corriendo:
// ps aux
