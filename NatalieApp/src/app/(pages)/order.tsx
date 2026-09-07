import {View, Text, TextInput, TouchableOpacity} from "react-native";

import { createGlobalStyles } from "@/styles/global";
import { orderPageStyles } from "@/styles/orderPage";
import { useState } from "react";
import { orderFetchService } from "@/services/fetchServices/orderFetchService";

export default function OrderPage(){
    const orderStyles = orderPageStyles();
    const globalStyles = createGlobalStyles();

    const [contacts, setContacts] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const sendOrderHandler = async () => await orderFetchService.sendOrder(name, contacts, description);

    return (
        <View>
            <Text style={globalStyles.pageTitle}>заказать статью</Text> 
            <View style={globalStyles.form}>
                <View style={orderStyles.formItem}>
                    <Text style={[globalStyles.text,]}>Имя</Text>
                    <TextInput style={[globalStyles.formItemBorder]} value={name} onChangeText={setName} placeholderTextColor="lightgray" placeholder="Ваше имя(необязательно)"/>
                </View>

                <View style={orderStyles.formItem}>
                    <Text style={[globalStyles.text]}>Контакты</Text>
                    <TextInput style={[globalStyles.formItemBorder]} value={contacts} onChangeText={setContacts} placeholderTextColor="lightgray" placeholder="Ваши контакты"/>
                </View>

                <View style={orderStyles.formItem}>
                    <Text style={[globalStyles.text]}>Описание</Text>
                    <TextInput style={[globalStyles.formItemBorder]} value={description} onChangeText={setDescription} placeholderTextColor="lightgray" placeholder="Описание статьи"/>
                </View>

                <TouchableOpacity style={[globalStyles.sendButton, orderStyles.formItem]} onPress={sendOrderHandler}>
                    <Text style={globalStyles.sendButtonText}>Заказать</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}