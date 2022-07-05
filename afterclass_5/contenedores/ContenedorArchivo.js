const fs = require("fs");

class ContenedorMemoria {
  constructor(name) {
    this.name = name;
  }

  findAll() {
    return fs.promises
      .readFile(this.name, "utf-8")
      .then((itemString) => JSON.parse(itemString));
  }

  find(id) {
    const index = this.name.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error("Error al listar: elemento no encontrado");
    }

    return this.name[index];
  }

  create(data) {
    return this.findAll()
      .then((items) => {
        items.push(data);
        const dataString = JSON.stringify(items);
        return fs.promises.writeFile(this.name, dataString);
      })
      .then((_) => data);
  }

  update(id, data) {
    const index = this.name.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error("Error al actualizar: elemento no encontrado");
    }

    this.name[index] = Object.assign(this.name[index], data);

    return this.name[index];
  }

  delete(id) {
    const index = this.name.findIndex((item) => item.id === id);

    if (index === -1) {
      throw new Error("Error al borrar: elemento no encontrado");
    }

    this.name.splice(index, 1);
  }
}

module.exports = ContenedorMemoria;
