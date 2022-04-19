import Users from "../../models/users.js";

const userResolver = {
    Query: {
        getUsers: async () => {
            const res = await Users.find();
            return res;
        }
    },
};

export default userResolver;