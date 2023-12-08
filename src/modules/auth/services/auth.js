const bcrypt = require('bcrypt');
const usersService = require('../../users/services/users');

class AuthService {
    constructor(usersService) {
        this.usersService = usersService;
      }
    

    async register(payload){
        console.log('services-auth register :');
        console.log( payload);
        const { password, ...rest } = payload;
        console.log(rest);
        const passwordHash = await bcrypt.hash(password, 10);
        console.log(passwordHash);
        const user = await usersService.createUser({
            ...rest,
            password: passwordHash,
        });
        console.log(user);
        return payload;
    };
}

const authService = new AuthService(usersService);

module.exports = authService;
