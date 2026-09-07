import { apiPath } from "@/config/paths";
import { fetchService, FetchService } from "./fetchService";

import { Platform } from "react-native";

import * as DocumentPicker from 'expo-document-picker';

class IdeaFetchService{
    private fetchService:FetchService;

    constructor(fetchService:FetchService){
        this.fetchService = fetchService;
    }

    async sendVideoIdea(description:string, files:DocumentPicker.DocumentPickerAsset[]){
        const form = new FormData();
        form.append("description", description);

        if(Platform.OS === "web"){
            for (const file of files) {
                const response = await fetch(file.uri);
                const blob = await response.blob();

                const webFile = new File([blob], file.name || 'file', { type: file.mimeType });
                    
                form.append("files", webFile);
            };
        }else{
            form.append("files", files as any);
        }
        
        await this.fetchService.fetch({
            request:apiPath.sendVideoIdea,
            method:"POST",
            body:form
        });
    }
}

export const ideaFetchService = new IdeaFetchService(fetchService);