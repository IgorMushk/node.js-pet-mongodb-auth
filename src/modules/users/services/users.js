const usersRepository = require('../repositories/user');

class UsersService {
    constructor(usersRepository) {
      this.usersRepository = usersRepository;
    }

    async createUser(payload) {
        return await this.usersRepository.create(payload);
      }
    
}

const usersService = new UsersService(usersRepository);
module.exports = usersService;
