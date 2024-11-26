import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Colors } from "../assets/Colors"
import { images } from "../assets/images"
import { strings } from "../assets/strings"
import { textStyles } from "../utils/textStyles"
import LottieView from 'lottie-react-native';

export const Loader = () => {

    return <View style={styles.container}>
        <Text style={[textStyles.title, styles.title]}>{strings.loading}</Text>
        <LottieView style={styles.loaderIcon} source={images.loader} autoPlay loop />
    </View>
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.black,
        paddingVertical: 50,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    title: {
        paddingTop: 100,
        paddingHorizontal: 20,
    },
    loaderIcon: {
        height: 200,
        width: 200,
        marginTop: 20,
        backgroundColor: Colors.black,
    }
})