import express from 'express'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import path from 'path'
import controller from '../api/controllers/controller.js'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

// Configurando o view engine EJS
app.set('view engine', 'ejs')

// Usando path.resolve para obter o caminho absoluto para o diretório 'src'
app.set('views', path.resolve(__dirname, '../src'));

app.use('/styles',  express.static(path.join(__dirname, '../src/styles')));


app.get('/', controller.getIndex)

export default app