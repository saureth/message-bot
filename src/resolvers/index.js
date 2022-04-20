import messageResolver from "./library/messageResolver.js";
import userResolver from "./library/userResolver.js";

const resolvers = [
    userResolver,
    messageResolver
];

export default resolvers;