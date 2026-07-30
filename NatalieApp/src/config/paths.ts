import { httpPath } from "./config";

const apiPrefix = httpPath + "api/";
const staticPrefix = httpPath;
const authPrefix = httpPath + "auth/";

export const apiPath = {
    getPrices: apiPrefix + "getPrices",
    sendVideoIdea: apiPrefix + "sendVideoIdea",
    sendOrder: apiPrefix + "sendOrder"
};

export const authPath = {
    
};

export const staticPath = {
    natalieImage: staticPrefix + "getNatalieImage"
};