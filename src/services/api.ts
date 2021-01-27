import {Api} from "./config";
import {request} from "./request";

export const getAllCategories = async () => {
    return await request.get(Api.Url + Api.version + "/categories", "");
};

export const getCats = async (limit: number, categories: Array<number>) => {
    return await request.get(Api.Url + Api.version + `/images/search?limit=${limit}&category_ids=${categories.join(",")}`, "");
};
