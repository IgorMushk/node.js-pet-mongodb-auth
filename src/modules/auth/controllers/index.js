const authService = require('../services/auth')

class AuthController {
    constructor(authService) {
        this.authService = authService;
      }
    
    login = async (req, res) => {
        const user = await this.authService.login(req.body);
        //res.json({ status: 200, message: 'User logged in successfully!',data: { token: accessToken,},});
        res.json({status: 200, message : "User logged in successfully!", data: user,})
    };

    register = async (req, res) => {
        const user = await this.authService.register(req.body);
        res.json({status: 200, message : "User registered successful", data: user,})
    };

    refresh = async (req, res) => {}

    logout = async (req, res) => {}
}
const authController = new AuthController(authService);

module.exports = authController;