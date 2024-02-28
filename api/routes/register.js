import express from 'express'
import ControllersPage from '../controllers/controller.js'


export default function createRegisterRouter() {
    const router = express.Router()

    router 
        .get('/register', ControllersPage.getRegister)
    
    return router
}