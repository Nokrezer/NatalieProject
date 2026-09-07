import { useRef } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Link } from 'expo-router';

import { useTextColor } from '@/hooks/use-text-color';
import { staticPath } from '@/config/paths';
import { mainPageStyles } from '@/styles/mainPage';
import { createGlobalStyles } from '@/styles/global';


export default function HomeScreen(){
  const globalStyles = createGlobalStyles();
  return (
    <View style={{alignItems:"center", width:"100%"}}>
      <Image source={{uri:staticPath.natalieImage}} style={mainPageStyles.natalieImage}/>
      <Text style={[{marginVertical:10}, globalStyles.pageTitle]}>Natalie</Text>
      <Text style={globalStyles.text}>ТГК: <Link href="https://t.me/KamazikDobri">a</Link></Text>
      
    </View>
  );
}