import Users from "../../models/users.js";

const userResolver = {
    Query: {
        getUsers: async () => {
            const res = await Users.find().populate('messageList');
            return res;
        }
    },
};

export default userResolver;