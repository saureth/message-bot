import Categories from "../../models/categories.js";

const categoryResolver = {
    Query: {
        getCategories: async () => {
            const res = await Categories.find();
            return res;
        }
    },
};

export default categoryResolver;