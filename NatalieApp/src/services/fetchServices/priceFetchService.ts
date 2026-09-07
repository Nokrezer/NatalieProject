import { FetchService, fetchService } from "./fetchService";
import { apiPath } from "@/config/paths";

class PriceFetchService{
    private fetchService:FetchService;
    constructor(fetchService:FetchService){
        this.fetchService = fetchService;
    }

    async getPrices(){
        const response = await this.fetchService.fetch({request:apiPath.getPrices});
        return response;
    }
}

export const priceFetchService = new PriceFetchService(fetchService);