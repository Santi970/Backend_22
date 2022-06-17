const express = require("express");
const { Router } = express;
const mascotasRouter = Router();

const mascotas = [];

mascotasRouter.use('', (req, res, next) => {
    console.log('Request recibido al router de mascotas')
    return next()
});

mascotasRouter.get('', (req, res) => {
    return res.json(mascotas)
});

mascotasRouter.post('', function (req, res) {
    
    const newPet = req.body

    newPet.id = mascotas.length + 1

    mascotas.push(newPet)

    return res.status(201).json({newPet})
});



module.exports = mascotasRouter;