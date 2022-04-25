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
        getAllRecords: [Record]
        getRecordBySenderId(_sender: ID!): [Record]
    }
`;

export default typeDefRecord;