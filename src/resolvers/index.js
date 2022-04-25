import categoryResolver from "./library/categoryResolver.js";
import messageResolver from "./library/messageResolver.js";
import recordResolver from "./library/recordResolver.js";
import userResolver from "./library/userResolver.js";

const resolvers = [
    userResolver,
    messageResolver,
    categoryResolver,
    recordResolver
];

export default resolvers;