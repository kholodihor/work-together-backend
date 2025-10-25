// import { createServer } from '@vercel/node' // optional helper
import express from 'express'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API on Vercel',
      version: '1.0.0',
    },
  },
  apis: ['./api/**/*.ts', './routes/**/*.ts'],
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default app
