export default class ControllersPage {
    
    static getLogin = async (req, res) => {
        res.render('home')
    }
    
    static getRegister = async (req,res) => {
        res.render('register')
    }
}


