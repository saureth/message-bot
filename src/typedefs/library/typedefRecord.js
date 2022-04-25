import { gql } from "apollo-server";

const typeDefRecord = gql`

    type Record {
        id: ID
        sender: User
        receiver: User
        message: Message
        date: String
    }

    type Query {
        getRecord: [Record]
    }
`;

export default typeDefRecord;