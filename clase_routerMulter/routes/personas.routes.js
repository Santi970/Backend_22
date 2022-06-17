const express = require("express");
const { Router } = express;
const personasRouter = Router();

let persona = [];

personasRouter.get('', (req, res) => {
    return res.json(persona)
});

personasRouter.post('', function (req, res) {
    
    const newPersona = req.body

    newPersona.id = persona.length + 1

    persona.push(newPersona)

    return res.status(201).json({newPeronsa: newPersona})
});

module.exports = personasRouter;

