require('dotenv').config()
const express = require('express')
const cors = require('cors');
const productRoutes = require('./routes/productRoutes')

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

// Rotas da API
app.use('/api/products', productRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})

