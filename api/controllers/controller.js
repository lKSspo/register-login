export default class ControllersPage {
    
    static getLogin = async (req, res) => {
        res.render('login')
    }
    
    static getRegister = async (req,res) => {
        res.render('register')
    }

    static getHomePage = async (req, res) => {
        res.render('home')
    }
}


