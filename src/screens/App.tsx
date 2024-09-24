

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NasaService } from '../services/NasaService';

function App(): React.JSX.Element {
 
	const [astheroids, setAstheroids] = useState<Array<Astheroid>>();
	const getAstheroids = async () => {
		try {
			const response = await NasaService.getAsteroids();
			console.log('RESP ', response);
		} catch (e: any) {
			console.log('ERROR ', e.error);
		}
	}

	useEffect(() => {

		getAstheroids();
	}, []);

	return (
		<SafeAreaView>
		
		</SafeAreaView>
	);
}

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

export default App;
