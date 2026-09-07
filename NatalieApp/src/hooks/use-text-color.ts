import { useColorScheme } from "react-native";

export function useTextColor(){
    const colorScheme = useColorScheme();
    const color = colorScheme === "dark" ? "white" : "black";

    return color;
}