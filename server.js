import app from './api/app.js'

const port = 8080

app.listen(port, () => {
console.log(`🚀 servidor rodando em http://localhost:${port}`)
})