import express from 'express'
import ControllersPage from '../controllers/controller.js'

export default function createHomeRouter() {
    const router = express.Router()

    router 
        .get('/home', ControllersPage.getHomePage)
    
    return router
}