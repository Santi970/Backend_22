class ContenedorMemoria {
  constructor() {
    this.data = []
  }

  findAll() {
    return this.data
  }

  find(id) {
    const index = this.data.findIndex(item => item.id === id)

    if (index === -1) {
      throw new Error('Error al listar: elemento no encontrado')
    }

    return this.data[index]
  }

  create(data) {
    this.data.push(data)

    return data
  }

  update(id, data) {
    const index = this.data.findIndex(item => item.id === id)

    if (index === -1) {
      throw new Error('Error al actualizar: elemento no encontrado')
    }

    this.data[index] = Object.assign(this.data[index], data) //Object.assign toma un objeto de base y por encima pone el objeto que le pasemos. 

    return this.data[index]
  }

  delete(id) {
    const index = this.data.findIndex(item => item.id === id)

    if (index === -1) {
      throw new Error('Error al borrar: elemento no encontrado')
    }

    this.data.splice(index, 1)//splice a partir del indice que se le indica,  comienza a borrar elementos y como segundo param le indicamos el numero de elementos queu queremos que borre
                              // basicamente borra el elemento especifico. 
    return true
  }
}

export default ContenedorMemoria