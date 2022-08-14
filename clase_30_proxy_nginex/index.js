const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware') //requerimos el middleware

const app = express()

app.use((req, res, next) => {
  console.log(req.path, req.headers)
  return next()
})

app.use('/users', createProxyMiddleware({ target: 'http://localhost:8081', changeOrigin: true }))
app.use('/products', createProxyMiddleware({ target: 'http://localhost:8082', changeOrigin: true }))

app.listen(3000)

