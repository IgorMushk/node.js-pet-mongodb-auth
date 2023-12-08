const authService = require('../services/auth')

class AuthController {
    constructor(authService) {
        this.authService = authService;
      }
    
    login = async (req, res) => {}

    register = async (req, res) => {
        const user = await this.authService.register(req.body);
        this.login(user);
        res.json({status: 200})
    }
    refresh = async (req, res) => {}

    logout = async (req, res) => {}
}
const authController = new AuthController(authService);

module.exports = authController;