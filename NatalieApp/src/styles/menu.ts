import { StyleSheet } from "react-native"
import { Spacing } from "@/constants/theme";
import {useWindowDimensions} from "react-native";

export function createMenuStyles(width:number){
    return StyleSheet.create({
        menu:{
            paddingLeft:10,
            paddingRight:10,
            position:"fixed",
            width:"100%",
            height: 40,
            flexDirection: width < 600 ? "column" : "row",
            zIndex:1000,
            boxShadow:"0 0px 10px gray"
        },
        menuForAndroid:{
            boxShadow: width < 600 ? "0 0px 10px gray" : "",
        },
        text:{
            fontSize:1,
            color:"black",
        },
        hoverText:{
            borderBottomWidth:1
        },
        button:{
            marginHorizontal: width < 600 ? 0 : 10,
            marginVertical: width < 600 ? 10 : 0,
            justifyContent: "center",
            alignItems: "center",
            width:width < 600? "100%":null,
            height:"100%"
        },
        block:{
            flexDirection: width < 600 ? "column" : "row",
        },
        menuMainText:{
            fontSize:15
        },
        menuMainTextPhone:{
            alignSelf:"center",
            display:"flex",
            alignItems:"center"
        },
        menuItem:{
            marginLeft:width<600?0:"auto", 
            alignItems:"center"
        }
    });
}