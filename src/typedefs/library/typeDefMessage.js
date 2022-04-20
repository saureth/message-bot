import { gql } from "apollo-server";

const typeDefMessage = gql`

    type Message {
        id: ID
        category: Int
        text: String
    }

    type Query {
        getMessages: [Message]
    }
`;

export default typeDefMessage;