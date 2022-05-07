import Users from "../../models/users.js";
import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ApolloError } from "apollo-server-errors";
import { getUserByEmail } from "./userService.js";

const createToken = (user) => {
    const email = user.email;
    return jwt.sign(
        { user_id: user._id, email },
        secretKey,
        {
            expiresIn: "2h"
        }
    );
}
const secretKey = 'Juan hijueputa';

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
        }
    },
    Mutation: {
        loginUser: async (_, {loginInput: {email, password}}) => {
            const user = await getUserByEmail(_,{email});
            if(!!user && await bcrypt.compare(password,user.pass)) {
                const tkn = createToken(user);
                user.token = tkn;
                console.log('autenticado');
                return user;
            }
            else {
                throw new ApolloError('Incorrect password', 'INCORRECT_PASSWORD');
            }
            return user;
        }
    }
};

export default userResolver;