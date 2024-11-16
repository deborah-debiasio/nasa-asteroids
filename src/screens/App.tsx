
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { NasaService } from '../services/NasaService';
import Carousel from "react-native-reanimated-carousel";
import { AstheroidItem } from '../components/AstheroidItem';

function App(): React.JSX.Element {
	const { height, width } = useWindowDimensions();

	const scale = 1;
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

	useEffect(() => {
		getAstheroids();
	}, []);

	return <SafeAreaView>
		<View id="carousel-component">
			<Carousel
				loop
				style={{
					width: width,
					height: height,
					justifyContent: "center",
					alignItems: "center",
				}}
				width={width}
				height={height}
				data={astheroids ?? []}
				renderItem={({item, index }) => <AstheroidItem astheroid={item}/>}
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
