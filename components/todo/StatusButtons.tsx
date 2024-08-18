import { Colors } from '@/constants/Colors';
import todoStore from '@/store/TodoStore';
import { ITodo } from '@/types/Todo';
import { observer } from 'mobx-react-lite';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const getTextStyle = (bool: boolean) =>
	bool ? { ...styles.text, ...styles.textActive } : styles.text;

type Props = { status: ITodo['status']; id: ITodo['id'] };

const StatusButtons: React.FC<Props> = ({ status, id }) => {
	const isPending = status === 'pending';
	const isDone = status === 'done';
	const isWontdo = status === 'wontdo';

	const pendingStyle = isPending
		? {
				...styles.button,
				...styles.buttonYellow,
				...styles.buttonYellowActive,
		  }
		: { ...styles.button, ...styles.buttonYellow };

	const doneStyle = isDone
		? {
				...styles.button,
				...styles.buttonGreen,
				...styles.buttonGreenActive,
		  }
		: { ...styles.button, ...styles.buttonGreen };

	const wontdoStyle = isWontdo
		? {
				...styles.button,
				...styles.buttonRed,
				...styles.buttonRedActive,
		  }
		: { ...styles.button, ...styles.buttonRed };

	return (
		<View style={styles.buttons}>
			<Pressable
				style={pendingStyle}
				onPress={() => todoStore.setStatus('pending', id)}
			>
				<Text style={getTextStyle(isPending)}>Pending</Text>
			</Pressable>

			<Pressable
				style={doneStyle}
				onPress={() => todoStore.setStatus('done', id)}
			>
				<Text style={getTextStyle(isDone)}>Done</Text>
			</Pressable>

			<Pressable
				style={wontdoStyle}
				onPress={() => todoStore.setStatus('wontdo', id)}
			>
				<Text style={getTextStyle(isWontdo)}>Won't do</Text>
			</Pressable>
		</View>
	);
};

export default observer(StatusButtons);

const styles = StyleSheet.create({
	buttons: {
		position: 'absolute',
		left: 13,
		bottom: 19,
		right: 13,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	button: {
		borderWidth: 1,
		borderRadius: 50,
		width: 80,
		height: 36,
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonYellow: {
		borderColor: Colors.yellow,
	},

	buttonYellowActive: {
		backgroundColor: Colors.yellow,
	},

	buttonGreen: {
		borderColor: Colors.green,
	},

	buttonGreenActive: {
		backgroundColor: Colors.green,
	},

	buttonRed: {
		borderColor: Colors.red,
	},

	buttonRedActive: {
		backgroundColor: Colors.red,
	},

	text: {
		fontSize: 14,
		lineHeight: 18,
		fontFamily: 'LexendDecaRegular',
		color: '#24252C',
	},

	textActive: { color: '#fff' },
});
