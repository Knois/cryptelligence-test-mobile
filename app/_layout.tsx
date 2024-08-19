import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded] = useFonts({
		LexendDecaRegular: require('../assets/fonts/LexendDeca-Regular.ttf'),
		LexendDecaSemiBold: require('../assets/fonts/LexendDeca-SemiBold.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerShown: false }} />
		</Stack>
	);
}
