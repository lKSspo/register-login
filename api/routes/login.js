import express from 'express'
import ControllersPage from '../controllers/controller.js'

export default function createLoginRouter() {
    const router = express.Router()

    router
        .get('/', ControllersPage.getLogin)

    return router
}
