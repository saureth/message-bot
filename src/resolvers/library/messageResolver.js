import Messages from "../../models/messages.js";

const messageResolver = {
    Query: {
        getMessages: async () => {
            const res = await Messages.find();
            return res;
        }
    },
};

export default messageResolver;