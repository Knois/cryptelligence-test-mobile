import { Colors } from '@/constants/Colors';
import { ITodo } from '@/types/Todo';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = { status: ITodo['status'] };

const Indicator: React.FC<Props> = ({ status }) => {
	if (status === 'wontdo') {
		return <View style={{ ...styles.indicator, ...styles.indicatorRed }} />;
	} else if (status === 'pending') {
		return <View style={{ ...styles.indicator, ...styles.indicatorYellow }} />;
	} else {
		return <View style={styles.indicator} />;
	}
};

export default React.memo(Indicator);

const styles = StyleSheet.create({
	indicator: {
		position: 'absolute',
		top: 8,
		left: 8,
		width: 16,
		height: 16,
		borderRadius: 8,
		backgroundColor: Colors.green,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.25,
		shadowRadius: 2,
		elevation: 2,
	},

	indicatorRed: {
		backgroundColor: Colors.red,
	},

	indicatorYellow: {
		backgroundColor: Colors.yellow,
	},
});
