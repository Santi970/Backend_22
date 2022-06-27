
//Realizar una consulta por nombre de producto especifico.
db.productos.find({title: { $eq: 'Pantalon 1' } }) 
