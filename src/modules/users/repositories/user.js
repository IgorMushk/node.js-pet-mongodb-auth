const User = require('../modals/user');

class UsersRepository {
    async create(payload) {
        const user = await User.create(payload);
        return user;
    }
}

const usersRepository = new UsersRepository();

module.exports = usersRepository;
