import query from './db.js'

const id = '3l4lkjdlkgjwdlkfjweo'
const users = query.doc(id)

try{
    const response = await doc.get()
    const user = {
        id: response.id, 
        ...response.data()
    }
    console.log(user)
}catch (e){
    console.log(`Error: ${e.message}`)
}