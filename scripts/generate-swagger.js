const fs = require('node:fs')
const path = require('node:path')
// scripts/generate-swagger.js
const swaggerJsdoc = require('swagger-jsdoc')

const outputDir = path.join(__dirname, '../public')
const outputFile = path.join(outputDir, 'swagger.json')

// Ensure ./public exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'Generated automatically via swagger-jsdoc',
    },
  },
  apis: ['./src/controllers/*.ts', './src/models/*.ts', './src/routes/*.ts'], // Path to the API docs
}

const swaggerSpec = swaggerJsdoc(options)

// Write file safely
fs.writeFileSync(outputFile, JSON.stringify(swaggerSpec, null, 2))

console.log('✅ Swagger spec generated at:', outputFile)
