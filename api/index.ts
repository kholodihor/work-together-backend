import swaggerUi from 'swagger-ui-express'
import swaggerDocument from '../public/swagger.json'
import app from '../src/index'

const CSS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.1.0/swagger-ui.min.css'

// Swagger setup
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  customCss:
        '.swagger-ui .opblock .opblock-summary-path-description-wrapper { align-items: center; display: flex; flex-wrap: wrap; gap: 0 10px; padding: 0 10px; width: 100%; }',
  customCssUrl: CSS_URL,
}))

// Your other routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello World' })
})

export default app
