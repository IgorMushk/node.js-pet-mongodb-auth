class AuthService {
    constructor() {
    }

    register(payload){
        console.log('services-auth register :', payload);
        return payload;
    };
}

const authService = new AuthService();

module.exports = authService;
