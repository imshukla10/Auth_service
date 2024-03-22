const {User} = require('../models/index');

class UserRepository{
    async create(data){
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something wrong in user repository");
            throw error;
        }
    }

    async destroy(userId){
        try {
            const response = await User.destroy({
                where:{
                    id:userId
                }
            });
            return response;
        } catch (error) {
            console.log("Something wrong in user repository");
            throw error;
        }
    }

}

module.exports = UserRepository;