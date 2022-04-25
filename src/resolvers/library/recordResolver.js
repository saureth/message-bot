import record from "../../models/record.js";

const recordResolver = {
    Query: {
        getAllRecords: async () => {
            const res = await record.find()
                .populate('sender')
                .populate('receiver')
                .populate('message')
                .populate({
                    path: 'message',
                    populate: {
                      path: 'category',
                      model: 'Categories'
                    }
                })
            return res;
        }
    },
};

export default recordResolver;