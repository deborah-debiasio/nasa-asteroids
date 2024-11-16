import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../assets/Colors"
import { images } from "../assets/images"
import { strings } from "../assets/strings"
import { textStyles } from "../utils/textStyles"
import LottieView from 'lottie-react-native';


interface Props {
    astheroid: Astheroid;
}

export const AstheroidItem = ({ astheroid }: Props) => {

    return <View style={styles.container}>
        <Text style={textStyles.title}>{astheroid.name}</Text>
        <Text style={[textStyles.description, { paddingTop: 10 }]}>{astheroid.is_potentially_hazardous_asteroid ? strings.dangerous : strings.notDangerous}</Text>
        <LottieView style={{ height: astheroid.estimated_diameter.meters.estimated_diameter_max, width: astheroid.estimated_diameter.meters.estimated_diameter_max }} source={images.astheroidLottie} autoPlay loop />
        <Text style={[textStyles.description, { paddingTop: 10 }]}>{`${astheroid.estimated_diameter.meters.estimated_diameter_max} meters`}</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.black,
        paddingVertical: 50,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
})