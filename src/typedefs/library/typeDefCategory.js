import { gql } from "apollo-server";

const typeDefCategory = gql`

    type Category {
        id: ID
        name: String
    }

    type Query {
        getCategories: [Category]
    }
`;

export default typeDefCategory;