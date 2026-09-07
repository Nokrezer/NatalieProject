import { FetchService, fetchService } from "./fetchService";
import { apiPath } from "@/config/paths";

class OrderFetchService{
    private fetchService:FetchService;

    constructor(fetchService:FetchService){
        this.fetchService = fetchService;
    }

    async sendOrder(name:string, contacts:string, description:string){
        const form = new FormData();
        form.append("contacts", contacts);
        form.append("name", name);
        form.append("description", description);

        await this.fetchService.fetch({request:apiPath.sendOrder,
            method:"POST",
            body:form
        });
    }
}

export const orderFetchService = new OrderFetchService(fetchService);