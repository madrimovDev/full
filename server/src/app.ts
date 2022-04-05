import express from 'express'
import cors from 'cors'
import rootRoutes from './routes/upload.routes'
import upload from './middlewares/upload'

const app = express()
const PORT = 5555

// * express config */

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
app.use(express.static('puplic'))

// * Routes */
app.use('/api', upload, rootRoutes)

app.listen(PORT, () => {
  console.log('Server run on http://localhost:' + PORT)
})
