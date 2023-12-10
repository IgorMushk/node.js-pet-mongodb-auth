const authService = require("../services/auth");

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  login = async (req, res) => {
    //const user = await this.authService.login(req.body);
    const { accessToken, refreshToken } = await this.authService.login(req.body);
    console.log("cookies : ", req.cookies);
    //res.cookie("test32", 123, { secure: true, httpOnly: true });
    res.cookie("refreshToken", refreshToken, { secure: true, httpOnly: true });
    //res.json({status: 200, message : "User logged in successfully!", data: user,})
    res.json({ status: 200, message: "User logged in successfully!", data: { token: accessToken } });
  };

  register = async (req, res) => {
    const user = await this.authService.register(req.body);
    res.json({ status: 200, message: "User registered successful", data: user });
  };

  refresh = async (req, res) => {};

  logout = async (req, res) => {};
}
const authController = new AuthController(authService);

module.exports = authController;
