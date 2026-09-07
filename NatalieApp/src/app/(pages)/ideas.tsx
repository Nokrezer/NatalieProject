import {View, Text, useWindowDimensions, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform} from "react-native";
import { SetStateAction, useState } from "react";
import * as DocumentPicker from 'expo-document-picker';

import { ideaFetchService } from "@/services/fetchServices/ideaFetchService";

import { createGlobalStyles } from "@/styles/global";
import { ideaPageStyles } from "@/styles/ideaPage";

import AntDesign from '@expo/vector-icons/AntDesign';

function LoadedFilesComponent({files, setFiles}:{files:DocumentPicker.DocumentPickerAsset[], setFiles?:Function}){
    const ideaStyles = ideaPageStyles();
    const globalStyles = createGlobalStyles();
    let itemsIndex = 0;

    const deleteFileHandler = (file:DocumentPicker.DocumentPickerAsset) => {
        if(!setFiles)
            return;
        
        const newListFiles = files.filter(f => f !== file);
        setFiles(newListFiles);
    };

    return <>
    {files.map(file => {
        itemsIndex++;
        return <View style={[globalStyles.formItemBorder, {marginVertical:2, flexDirection:"row"}]} key={itemsIndex}>
            <Text>
                {file.name}
            </Text>
            <AntDesign name="close" size={16} color="black" style={{marginLeft:"auto"}} onPress={() => deleteFileHandler(file)}/>
        </View>
    })}
    </>;
}

export default function VideoIdeaPage(){
    const [files, setFiles] = useState<DocumentPicker.DocumentPickerAsset[]>([]);
    const [description, setDescription] = useState("");

    const {width} = useWindowDimensions();
    const globalStyles = createGlobalStyles();
    const ideaStyles = ideaPageStyles();

    const uploadFilesHandler = async () => {
        if(files.length > 0)
            return;

        const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        multiple: true,
      });

      if(result.canceled)
        return;
      
    setFiles(pastFiles => [...pastFiles, ...result.assets]);
      
    };

    const sendIdeaHandler = async () => {
        await ideaFetchService.sendVideoIdea(description, files);
        setFiles([]);
        setDescription("");
    };
    
    return (
    <View>
        <Text style={[globalStyles.pageTitle]}>предложить идею для видео</Text>

        <View style={[globalStyles.form]}>
            <View style={[globalStyles.formItemBorder, ideaStyles.formItem, {cursor:"pointer"}]}>
                {files.length > 0 ? 
                    <LoadedFilesComponent files={files} setFiles={setFiles}/> :
                    <TouchableWithoutFeedback
                    onPress={uploadFilesHandler}>
                        <Text>Загрузить материал</Text>
                    </TouchableWithoutFeedback>
                }
            </View>

            <View style={ideaStyles.formItem}>
                <Text>Описание</Text>
                <TextInput value={description} onChangeText={setDescription} placeholderTextColor={"lightgray"} placeholder="Опишите вашу идею" style={[globalStyles.formItemBorder]}/>
            </View>

            <TouchableOpacity style={[globalStyles.sendButton, ideaStyles.formItem, {width:100}]}
            onPress={sendIdeaHandler}>
                <Text style={globalStyles.sendButtonText}>Отправить</Text>
            </TouchableOpacity>
        </View>
    </View>);
}