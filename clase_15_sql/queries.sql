-- Listar base de datos para
SHOW DATABASES;
-- Crear base de datos
CREATE DATABASE ecommerce;

-- Usar base de datos 
USE ecommerce;

--Listar tablas
SHOW TABLES;

--Crear tabal de productosFile
CREATE TABLE productos (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    price  FLOAT,
    description VARCHAR(255),
    stock INT,
    PRIMARY KEY (id)
);

-- Detalle de una tabla
DESCRIBE productos;

-- Para insertar productos a la tabla:
INSERT INTO productos (
name, price, description, stock
) VALUES (
'Coca cola',
20.15,
'Refresco de cola',
100
);

-- Listar productos 
SELECT  * FROM productos;

SELECT name, stock FROM productos

-- Crear tablas de Categorias
CREATE TABLE categorias (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

-- Modificar la tabla de productos y agregar la llave foranea a categorias. 
ALTER TABLE products
ADD COLUMN category_id INT NULL DEFAULT 10,
ADD FOREIGN KEY (category_id) REFERENCES categories(id);


-- Insertar varias categorias a la vez
INSERT INTO categorias (name) VALUES ('Bebidas'), ('Snack');


--ACTUALIZAR productos
--Por id
UPDATE productos SET categoria_id = 1 WHERE id IN (1, 2);
- -Por nombre 
UPDATE productos SET categoria_id = 2 WHERE name = 'Galletas';

--Borrar registro
DELETE FROM productos WHERE id = 2;