import { StyleSheet } from "react-native";
import { Colors } from "../assets/Colors";

export const textStyles = StyleSheet.create({
    title: {
        color: Colors.white,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    description: {
        color: Colors.white,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'regular',
    }
})