import record from "../../models/record.js";

const recordResolver = {
    Query: {
        getRecord: async () => {
            const res = await record.find();
            return res;
        }
    },
};

export default recordResolver;