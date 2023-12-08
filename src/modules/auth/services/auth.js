class AuthService {
    constructor() {
    }

    register(payload){
        console.log(payload);
        return payload;
    };
}

const authService = new AuthService();

module.exports = authService;
