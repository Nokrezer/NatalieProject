export class FetchService{
    async fetch({request, method, headers, body}:
        {request:string, method?:string, headers?:{}, body?:FormData}):Promise<any>{
            
        const response = await fetch(request, {
                method:method ?? "GET",
                headers:headers,
                body:body,
                mode:"cors"
            });
            
        if(!response.ok)
            throw Error("Ошибка: " + (await response.text()));
        

        try{
            return await response.json();
        }catch{}
    }
}

export const fetchService = new FetchService();