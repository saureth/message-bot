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
        },
        getUserById: async(_, args) => {
            const { userId } = args;
            const res = Users.findById(userId);
            return res;
        },
        getUserByEmail: async(_, args) => {
            const { email } = args;
            const res = Users.find({
                email: email
            });
            return res;
        }
    }
};

export default userResolver;