import Users from "../../models/users.js";

export const getUserByEmail = async (_,args) => {
    const {email} = args;
    return Users.findOne({email});
}