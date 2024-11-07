import express from 'express'
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import routes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.use(routes)


app.listen(process.env.PORT || 3000)
console.log('Server listening on port', process.env.PORT || 3000)