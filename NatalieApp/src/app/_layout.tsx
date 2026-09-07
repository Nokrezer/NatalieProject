import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme, View } from 'react-native';
import {useFonts} from "@expo-google-fonts/oswald/useFonts";
import { Oswald_400Regular } from '@expo-google-fonts/oswald/400Regular';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import { Stack } from 'expo-router';

import { MenuComponent } from '@/components/shared/Menu';

SplashScreen.preventAutoHideAsync();

export default function TabLayout() {
  return (
    <View style={{height:"100%"}}>
        <MenuComponent/>
        <View style={{height:"100%", paddingTop:50}}>
          
          <ThemeProvider value={DefaultTheme}>
            <AnimatedSplashOverlay />
            <Stack screenOptions={{headerShown:false, contentStyle:{backgroundColor:"white"}}}>
              <Stack.Screen name="index"/>
              <Stack.Screen name="(pages)/prices"/>
            </Stack>
          </ThemeProvider>
        </View>
    </View>
  );
}
