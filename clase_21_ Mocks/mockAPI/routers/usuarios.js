import { Router } from 'express'
import DAOUsuariosMock from '../daos/usuarios.js'

const apiUsuarios = new DAOUsuariosMock()

const router = Router()

//POST
//http://localhost:8080/api/users/populate?total=100

router.post('/populate', async (req, res, next) => {
  try {
    res.json(await apiUsuarios.populate(req.query.total))
  } catch (err) {
    next(err)
  }
})

//http://localhost:8080/api/users/7d297ffb-f516-4290-9d7c-e2a78f8bcc1a
router.get('/', async (req, res, next) => {
  try {
    res.json(await apiUsuarios.findAll())
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    res.json(await apiUsuarios.create(req.body))
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    res.json(await apiUsuarios.find(req.params.id))
  } catch (err) {
    next(err)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    res.json(await apiUsuarios.update(req.params.id, req.body))
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    res.json(await apiUsuarios.delete(req.params.id))
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => {
  const erroresConocidos = [
    'Error al listar: elemento no encontrado',
    'Error al actualizar: elemento no encontrado',
    'Error al borrar: elemento no encontrado'
  ]

  if (erroresConocidos.includes(err.message)) { 
    res.status(404)
  } else {
    res.status(500)
  }

  return res.json({ message: err.message })
})

export default router

