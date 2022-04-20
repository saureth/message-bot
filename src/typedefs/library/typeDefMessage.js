import { gql } from "apollo-server";

const typeDefMessage = gql`

    type Message {
        id: ID
        category: Category
        text: String
    }

    type Query {
        getMessages: [Message]
    }
`;

export default typeDefMessage;