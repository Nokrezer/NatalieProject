import {Text, View, ScrollView, useWindowDimensions, FlatList} from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useGetPrices } from "@/hooks/use-get-prices";
import { createGlobalStyles } from "@/styles/global";
import { pricePageStyles } from "@/styles/pricePage";

export default function PricesBlock(){
    const globalStyles = createGlobalStyles();
    const [prices, loading] = useGetPrices();
    const {width} = useWindowDimensions();
    const priceStyles = pricePageStyles();
    
    if (loading)
        return null;

    let itemsIndex = 0;
    
    return (
        <View style={{height:"100%"}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={[globalStyles.pageTitle, {textAlign:"center"}]}>прайс лист</Text>
                
                <View style={priceStyles.cardInfo}>
                    {
                        prices.map(price => {itemsIndex++;
                            return (
                                <View style={[priceStyles.priceBlock]} key={itemsIndex}>
                                    <Text style={[priceStyles.blockText, priceStyles.blockTextTitle]}>{price.name}</Text>

                                    <Text style={[priceStyles.blockText, priceStyles.secondaryText]}>{price.description}</Text>
                                    
                                    <Text style={[priceStyles.blockText]}>
                                        от {price.lead_time} {price.lead_time>1?"дней":"дня"}
                                    </Text>
                                    
                                    <Text style={[priceStyles.blockText, priceStyles.priceText, {marginTop:"auto"}]}>
                                        {price.price} <FontAwesome name="ruble" size={19} color="lightblue" />
                                    </Text>
                                </View>)})
                    }
                </View>
            </ScrollView>
        </View>
    );
}