const fs = require('fs')
const path = require('path')

exports.getProduct = (req, res) => {
  try {
    const filePath = path.join(__dirname, '../data/data.json')
    const data = fs.readFileSync(filePath, 'utf-8')
    const product = JSON.parse(data)
    res.json(product)
  } catch(error) {
    console.log('Erro ao ler o arquivo:', error)
    res.status(500).json({error: 'Erro interno no servidor'})
  }
}
