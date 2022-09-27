const { exec, execFile, spawn } = require('child_process')

exec('ls -lh', (error, stdout, stderr) => {
    if(error){
        console.error(`Error: ${error.message}`)
        return
    }

    if(stderr){
        console.error(`stderr: ${stderr}`)
    }

    console.error(`stdout: ${stdout}`, typeof stdout)
})

/* ---  WIP ----*/
// execFile(`${__dirname}/ls.sh`, (error, stdout, stderr) => {
//     if(error){
//         console.error(`Error: ${error.message}`)
//         return
//     }

//     if(stderr){
//         console.error(`stderr: ${stderr}`)
//     }

//     console.error(`stdout: ${stdout}`)
// }) 

//para dar permiso de ejecucion: chmod a+x ls.sh 



const child =  spawn('find', ['.'])

let count = 0

child.stdout.on('data', data => {
    console.log('stdout', data)
})


child.stderr.on('stderr', data => {
    console.log(data)
})