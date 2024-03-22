const UserRepository = require('../repository/user-repository');

class UserService{
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(data){
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something wrong at user service",error);
            throw {error};
        }
    }

    async destroy(userId){
        try {
            const response = await this.userRepository.destroy(data);
            return response;
        } catch (error) {
            console.log("Something wrong at user service",error);
            throw {error};
        }
    }

}

module.exports = UserService;