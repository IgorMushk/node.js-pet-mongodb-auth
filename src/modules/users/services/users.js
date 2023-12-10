const usersRepository = require('../repositories/user');

class UsersService {
    constructor(usersRepository) {
      this.usersRepository = usersRepository;
    }

    async createUser(payload) {
        return await this.usersRepository.create(payload);
    }
 
    async updateUserById(id, payload) {
        return await this.usersRepository.updateById(id, payload);
    }
   
    async findByEmail(email) {
        return await this.usersRepository.findByEmail(email);
    }

    async findUserByRefreshToken(token) {
        return await this.usersRepository.findUserByRefreshToken(token);
      }   

}

const usersService = new UsersService(usersRepository);
module.exports = usersService;
