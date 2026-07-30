import { StyleSheet, Dimensions } from "react-native";

export function pricePageStyles(){
    const {width} = Dimensions.get("window");

    return StyleSheet.create({
        priceBlock:{
            width:350,
            height:250,
            borderWidth:1,
            borderRadius:5,
            borderColor:"lightgray",
            padding:20,
            boxShadow:"2px 5px 15px -5px gray",
            marginHorizontal:10,
            marginVertical:10
        },
        blockTextTitle:{
            fontSize:25,
        },
        blockText:{
            width:"100%", 
            textAlign:"center",
            marginVertical:5,
            fontSize:17
        },
        secondaryText:{
            color:"gray"
        },
        priceText:{
            color:"lightblue",
            fontSize:22,
            fontWeight:"bold"
        },
        cardInfo:{
            width:"100%",
            paddingBottom:70,
            alignItems:"center",
            flexDirection:width<600? "column" : "row",
            flexWrap:width<600?"nowrap":"wrap",
            justifyContent:"center"
        }
    });
}