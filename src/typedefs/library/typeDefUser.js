import { gql } from "apollo-server";

const typeDefUser = gql`

    type User {
        id: ID
        fullname: String
        email: String
        pass: String
        usertype: Int
        messageList: [ID]
    }

    type Query {
        getUsers: [User]
    }
`;

export default typeDefUser;