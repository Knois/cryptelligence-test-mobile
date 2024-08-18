import { Colors } from '@/constants/Colors';
import formStore from '@/store/FormStore';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';
const AddButton = () => {
	const handlePress = () => formStore.open();

	return (
		<Pressable style={styles.button} onPress={handlePress}>
			<Svg width={24} height={24} fill='none'>
				<Path
					stroke='#fff'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M12 5v14M5 12h14'
				/>
			</Svg>
		</Pressable>
	);
};

export default observer(AddButton);

const styles = StyleSheet.create({
	button: {
		marginTop: 5,
		width: 50,
		height: 50,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.violet,
	},
});
