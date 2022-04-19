import { ApolloServer } from "apollo-server";
import typeDefs from "./src/typedefs";
import resolvers from "./src/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});