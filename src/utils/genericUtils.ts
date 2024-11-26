import { useWindowDimensions } from "react-native"


export const getAstheroidSize = (size: number) => {
	const { width } = useWindowDimensions();
    return (size > width) ? (width - 50) : size;
}