import {View, Text} from "react-native";

import { createNoticeStyles } from "@/styles/notice";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function Notice({children, type}:{children:any, type?:string}){
    const noticeStyles = createNoticeStyles();

    return (
        <View style={noticeStyles.noticeView}>
            <Ionicons name="checkmark-circle-sharp" size={24} color="green" />
            <Text>{children}</Text>
        </View>
    );
}