import Users from "../../models/users.js";

const userResolver = {
    Query: {
        getUsers: async () => {
            const res = await Users.find()
                .populate('messageList')
                .populate({
                    path: 'messageList',
                    populate: {
                      path: 'category',
                      model: 'Categories'
                    }
                })
            return res;
        }
    },
};

export default userResolver;