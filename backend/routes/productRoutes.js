const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')

// Rota para obter os produtos
router.get('/', productController.getProduct)

module.exports = router