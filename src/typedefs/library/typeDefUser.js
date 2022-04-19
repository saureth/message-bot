import { gql } from "apollo-server";

const typeDefUser = gql`

    type User {
        id: number
        fullname: string
        email: string
        pass: string
        usertype: number
    }

    type Query {
        getUsers: [User]
    }
`;

export default typeDefUser;