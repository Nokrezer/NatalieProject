import {useState} from "react";
import {View, Text, TouchableOpacity, useWindowDimensions, Pressable} from "react-native";
import {isAndroid } from 'react-device-detect';
import { Link } from "expo-router";

import { createMenuStyles } from "@/styles/menu";
import { createGlobalStyles } from "@/styles/global";
import { useTextColor } from "@/hooks/use-text-color";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function HoverText({children, style}:{children:any, style:{}}){
  const [hover, setHover] = useState(false);
  const {width} = useWindowDimensions();
  const menuStyles = createMenuStyles(width);

  const hoverInHandler = () => {
        setHover(true);
    };
  const hoverOutHandler = () => {
      setHover(false);
  };

  return (
  <Pressable onHoverIn={hoverInHandler} onHoverOut={hoverOutHandler} style={{height:"100%", alignItems:"center", justifyContent:"center"}}>
    <Text style={[style, hover?menuStyles.hoverText:null, menuStyles.menuMainText]}>{children}</Text>
  </Pressable>);
}

export function MenuComponent(){
    const color = useTextColor();
    const {width} = useWindowDimensions();
    const menuStyles = createMenuStyles(width);
    const [menuOpened, setMenuOpened] = useState(false);//только на телефонах
    const globalStyles = createGlobalStyles();
    
    const openMenuHandler = () => setMenuOpened(true);
    const closeMenuHandler = () => setMenuOpened(false);
    
    if(width < 600 && !menuOpened){//На андроид делаем кнопку открытия меню
      return (
        <View style={[menuStyles.menu, globalStyles.rowContainer]}>
          <TouchableOpacity style={[{alignSelf:"center", position:"absolute", zIndex:1000}]} onPress={openMenuHandler}>
            <FontAwesome6 name="list-ul" size={22} color="black"/>
          </TouchableOpacity>

          <View style={[{alignItems:"center", width:"100%"}]}>
            <HoverText style={[menuStyles.menuMainTextPhone]}>Nahalka</HoverText>
          </View>
        </View>
      );
    }

    return (
    <View style={[menuStyles.menu, width<600?{height:"100%", backgroundColor:"white"}:null]}>
        <View style={[menuStyles.block, globalStyles.rowContainer]}>
          {isAndroid ? 
            <TouchableOpacity onPress={closeMenuHandler} style={{position:"absolute", zIndex:1000, marginTop:10}}>
              <MaterialIcons name="close" size={24} color="black" />
            </TouchableOpacity> : null}

          <Link style={[menuStyles.button, {textAlign:"center"}]} href="/">
            <HoverText style={[{color:color}, menuStyles.text]}>Nahalka</HoverText>
          </Link>
        </View>

        <View style={[menuStyles.block, width<600?{alignSelf:"center", marginTop:20}:{marginLeft:"auto"}]}>
          <Link style={[menuStyles.button]} href="/(pages)/prices">
            <HoverText style={[menuStyles.text]}>Услуги и цены</HoverText>
          </Link>

          <Link style={menuStyles.button} href="/">
            <HoverText style={[menuStyles.text]}>Контакты</HoverText>
          </Link>

          <Link style={menuStyles.button} href="/(pages)/ideas">
            <HoverText style={[menuStyles.text]}>Предложка видео</HoverText>
          </Link>

          <Link style={menuStyles.button} href="/(pages)/order">
            <HoverText style={[menuStyles.text]}>Заказать статью</HoverText>
          </Link>
        </View>
        
    </View>);
}