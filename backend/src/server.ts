import express from 'express'
import cors from 'cors'
import userRouter from './routes/UserRoutes'
import LogoRouter from './routes/LogoRoutes'
import { myDataSource } from './app-data-source'
import 'reflect-metadata'

myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch(err => {
    console.error('Error during Data Source initialization:', err)
  })

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/user', userRouter)
app.use('/logo', LogoRouter)

app.get('/', (req, res) => {
  res.send('Hello, World!')
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
