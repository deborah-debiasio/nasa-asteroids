
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { NasaService } from '../services/NasaService';
import Carousel from "react-native-reanimated-carousel";

function App(): React.JSX.Element {
	const { width } = useWindowDimensions();

	const scale = 0.7;
	const PAGE_WIDTH = width * scale;
	const PAGE_HEIGHT = 240 * scale;


	const [astheroids, setAstheroids] = useState<Array<Astheroid>>([]);
	const getAstheroids = async ()=> {
		try {

			const todayDate = moment().format("YYYY-MM-DD");
			const response = await NasaService.getAsteroids(todayDate);
			if (response?.data?.near_earth_objects[todayDate]) {
				setAstheroids(response?.data?.near_earth_objects[todayDate]);
			}
			console.log('RESP ', response.data.near_earth_objects[todayDate]);
		} catch (e: any) {
			console.log('ERROR ', e);
		}
	}

	// const AutoPLay = useToggleButton({
	// 	defaultValue: false,
	// 	buttonTitle: ElementsText.AUTOPLAY,
	// });
 
	// const animationStyle = React.useCallback((value: number) => {
	// 	"worklet";
 
	// 	const zIndex = interpolate(value, [-1, 0, 1], [10, 20, 30]);
	// 	const rotateZ = `${interpolate(value, [-1, 0, 1], [-45, 0, 45])}deg`;
	// 	const translateX = interpolate(
	// 		value,
	// 		[-1, 0, 1],
	// 		[-useWindowDimensions().width, 0, useWindowDimensions().width],
	// 	);
 
	// 	return {
	// 		transform: [{ rotateZ }, { translateX }],
	// 		zIndex,
	// 	};
	// }, []);

	useEffect(() => {

		getAstheroids();
	}, []);

	return <SafeAreaView>
		<View
			id="carousel-component"
			// dataSet={{ kind: "custom-animations", name: "rotate-in-out" }}
		>
			<Carousel
				loop
				style={{
					width: width,
					height: 240,
					justifyContent: "center",
					alignItems: "center",
				}}
				width={PAGE_WIDTH}
				height={PAGE_HEIGHT}
				data={astheroids ?? []}
				renderItem={({item, index }) => <Text>{item.name}</Text>}
				// autoPlay={AutoPLay.status}
				// customAnimation={animationStyle}
			/>
		</View>
	</SafeAreaView>;
}

export default App;

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});
