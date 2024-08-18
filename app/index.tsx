import AddButton from '@/components/buttons/AddButton';
import List from '@/components/general/List';

import { observer } from 'mobx-react-lite';
import { Image, StyleSheet, Text, View } from 'react-native';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>My To-Do</Text>

			<List />

			<AddButton />

			<Image
				style={styles.imgOne}
				source={require('../assets/images/Ellipse 4.png')}
			/>

			<Image
				style={styles.imgTwo}
				source={require('../assets/images/Ellipse 2.png')}
			/>

			<Image
				style={styles.imgThree}
				source={require('../assets/images/Ellipse 12.png')}
			/>

			<Image
				style={styles.imgFour}
				source={require('../assets/images/Ellipse 3.png')}
			/>
		</View>
	);
};

export default observer(HomeScreen);

const styles = StyleSheet.create({
	screen: {
		width: '100%',
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingTop: 28,
		paddingBottom: 35,
		position: 'relative',
	},

	title: {
		fontFamily: 'LexendDecaSemiBold',
		textAlign: 'center',
		fontSize: 19,
		lineHeight: 23.75,
	},

	imgOne: {
		position: 'absolute',
		top: height / 3,
		right: 0,
		zIndex: -1,
	},

	imgTwo: {
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: -1,
	},

	imgThree: {
		position: 'absolute',
		top: height / 5,
		left: 0,
		zIndex: -1,
	},

	imgFour: {
		position: 'absolute',
		top: height / 1.9,
		left: 0,
		zIndex: -1,
	},
});
