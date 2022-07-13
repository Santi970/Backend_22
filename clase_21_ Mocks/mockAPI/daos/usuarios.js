import ContenedorMemoria from '../contenedores/ContenedorMemoria.js'
import { generateUser } from '../utils/generateUser.js'

class DAOUsuariosMock extends ContenedorMemoria {
  constructor() { super() }

  populate(total = 50) { //total de elementos que queremos generar.
    for(let i = 0; i < total; i++) {
      const newUser = generateUser()
      this.create(newUser)
    }

    return this.findAll()
  }
}

export default DAOUsuariosMock