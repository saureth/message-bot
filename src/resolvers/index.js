import categoryResolver from "./library/categoryResolver.js";
import messageResolver from "./library/messageResolver.js";
import userResolver from "./library/userResolver.js";

const resolvers = [
    userResolver,
    messageResolver,
    categoryResolver
];

export default resolvers;