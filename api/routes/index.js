import express from 'express'
import createLoginRouter from './login.js'
import createRegisterRouter from './register.js'


export default function routes(app) {
    const routeLogin = createLoginRouter()
    const routerRegister = createRegisterRouter()

    app.use(
        express.json(),
        routeLogin,
        routerRegister
    )
}