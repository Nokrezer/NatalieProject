import {StyleSheet} from "react-native";
import { Dimensions } from "react-native";

export function createGlobalStyles(){
    const {width} = Dimensions.get("window");

    return StyleSheet.create({
        rowContainer:{
            flexDirection:"row"
        },
        pageTitle:{
            fontSize: width < 600 ? 25 : 50,
            fontFamily:"oswald",
            textAlign:"center"
        },
        text:{
            color:"black",
            fontSize:15
        },
        page:{
            height:"100%",
        },
        form:{
            width:width < 600 ? "90%" : "40%",
            alignSelf:"center",
            marginTop:20,
            borderRadius:10,
            boxShadow:"0 2px 4px 1px lightgray",
            padding:20
        },
        formItemBorder:{
            borderWidth:1,
            borderColor:"lightgray",
            padding:5,
            borderRadius:7
        },
        sendButton:{
            backgroundColor:"#c87165",
            borderRadius:5,
            padding:10,
        },
        sendButtonText:{
            textAlign:"center", 
            color:"white",
            fontSize:16
        }
    });
}