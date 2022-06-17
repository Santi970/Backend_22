class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    (this.nombre = nombre),
      (this.apellido = apellido),
      (this.libros = libros),
      (this.mascotas = mascotas);

    this.getFullName = () => `${this.nombre} ${this.apellido}`;

    this.addMascotas = (nombre) => this.mascotas.push(nombre);

    this.getMascotas = () => this.mascotas.length;

    this.addBooks = (nombre, autor) =>
      this.libros.push({
        nombre,
        autor,
      });

    this.getBooks = () => this.libros.map((e) => e.nombre);
  }
}

const libros = [
  {
    nombre: "libro1",
    autor: "autor1",
  },
  {
    nombre: "libro2",
    autor: "autor2",
  },
];

const mascotas = ["Perro", "Loro", "Canario", "Oso"];

const usuario1 = new Usuario("Santiago", "Cendra", libros, mascotas);

usuario1.addMascotas('Oveja')
usuario1.addBooks('Bathman', 'Bob Kane')

console.log('/-----------getFullName-----------/')
console.log(usuario1.getFullName())

console.log('/-------------getMascotas---------/')
console.log(usuario1.getMascotas())
console.log('/-------------getBooks---------/')
console.log(usuario1.getBooks())

console.log('/-------------Objeto Usuario---------/')
console.log(`Este es el primero ${JSON.stringify(usuario1)}`);
