const express = require('express')
var bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '/web'))

app.get('/', (req, res) => {
    res.render('home', {})
})

const port = 8080
app.listen(port, () => {
console.log(`🚀 servidor rodando em http://localhost:${port}`)
})