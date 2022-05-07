import { gql } from "apollo-server";

const typeDefUser = gql`

    type User {
        id: ID
        fullname: String
        email: String
        pass: String
        usertype: Int
        messageList: [Message]
        token: String
    }

    type Query {
        getUsers: [User]
    }

    input LoginInput {
        email: String
        password: String
    }

`;

export default typeDefUser;