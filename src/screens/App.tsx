
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, useWindowDimensions, View } from 'react-native';
import { NasaService } from '../services/NasaService';
import Carousel from "react-native-reanimated-carousel";
import { AstheroidItem } from '../components/AstheroidItem';
import { Loader } from '../components/Loader';
import { Colors } from '../assets/Colors';

function App(): React.JSX.Element {
	const { height, width } = useWindowDimensions();
	const [astheroids, setAstheroids] = useState<Array<Astheroid>>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const getAstheroids = async ()=> {
		try {
			setIsLoading(true);
			const todayDate = moment().format("YYYY-MM-DD");
			const response = await NasaService.getAsteroids(todayDate);
			if (response?.data?.near_earth_objects[todayDate]) {
				setAstheroids(response?.data?.near_earth_objects[todayDate]);
			}
		} catch (e: any) {
			console.log('ERROR ', e);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		getAstheroids();
	}, []);

	return <SafeAreaView style={{ backgroundColor: Colors.black }}>
		{isLoading ?
			<Loader/>
		:
			<View id="carousel-component">
				<Carousel
					loop
					style={{
						width: width,
						height: height,
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: Colors.black,
					}}
					width={width}
					height={height}
					data={astheroids ?? []}
					renderItem={({item, index }) => <AstheroidItem astheroid={item}/>}
				/>
			</View>
		}
	</SafeAreaView>;
}

export default App;
