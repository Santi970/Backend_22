import query from './db.js'

const id = 2
const doc = query.doc(id.toString())

try{
    const user = await doc.set({nombre: 'Laura', dni: 98382844})
    // const user = await query.add({
    //     nombre: 'Santi',
    //     dni: 43393123
    // })
    console.log(user)
}catch (e) {
    console.log(`Error  ${e.message}`)
}