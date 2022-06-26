const cursos = ["Desarrollo Web", "React JS", "Programación Backend"].filter(
  (curso) => curso === "React JS"
);

console.log(cursos);

//elemMatch funciona igual a esto
//Ejempo:
//db.clientes.find({cursos: { $elemMatch: { $eq:'React JS' } } })
