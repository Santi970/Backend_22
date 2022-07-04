import admin from 'firebase-admin';
import {readFile} from 'fs/promises'

const serviceAcount = JSON.parse(
    await readFile(
        new URL('./key.json', import.meta.url)
    )
)

admin.initializeApp({
    credential: admin.credential.cert(serviceAcount),
    databaseURL: 'https://coder-30975.firebaseio.com'
})


const db = admin.firestore()
const query = db.collection('users')

export default query