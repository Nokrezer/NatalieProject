import {View, Text, useWindowDimensions} from "react-native";

export function ContactsBlock(){
    const {width} = useWindowDimensions();

    return (
    <View>
        <Text style={[]}>контакты</Text>
    </View>);
}