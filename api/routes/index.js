import express from 'express'
import createLoginRouter  from './login.js'
import createRegisterRouter from './register.js'
import createHomeRouter from './home.js'


export default function routes(app) {
    const routeLogin = createLoginRouter()
    const routerRegister = createRegisterRouter()
    const routerHomePage = createHomeRouter()

    app.use(
        express.json(),
        routeLogin,
        routerRegister,
        routerHomePage
    )
}