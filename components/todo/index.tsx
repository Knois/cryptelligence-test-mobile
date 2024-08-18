import { ITodo } from '@/types/Todo';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';
import Indicator from './Indicator';
import StatusButtons from './StatusButtons';

type Props = { todo: ITodo };

const Todo: React.FC<Props> = ({ todo }) => {
	const [isExpanded, setIsExpanded] = React.useState<boolean>(false);

	const handlePress = () => setIsExpanded(s => !s);

	const todoStyles = isExpanded
		? { ...styles.todo, ...styles.todoExpanded }
		: styles.todo;

	return (
		<Pressable style={todoStyles} onPress={handlePress}>
			<Text style={styles.title} numberOfLines={1}>
				{todo.title}
			</Text>

			<Text style={styles.description} numberOfLines={1}>
				{todo.description}
			</Text>

			<Indicator status={todo.status} />

			<View style={styles.buttons}>
				<EditButton todo={todo} />

				<DeleteButton id={todo.id} />
			</View>

			{isExpanded && <StatusButtons status={todo.status} id={todo.id} />}
		</Pressable>
	);
};

export default React.memo(Todo);

const styles = StyleSheet.create({
	todo: {
		position: 'relative',
		width: '100%',
		height: 63,
		borderRadius: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 32,
		elevation: 5,
		backgroundColor: '#fff',
		paddingRight: 90,
		paddingLeft: 32,
		paddingVertical: 16,
		gap: 2,
	},

	todoExpanded: { height: 125 },

	title: {
		fontSize: 9,
		lineHeight: 12,
		color: '#6e6a7c',
		fontFamily: 'LexendDecaRegular',
	},

	description: {
		fontSize: 14,
		lineHeight: 18,
		color: '#24252c',
		fontFamily: 'LexendDecaRegular',
	},

	buttons: {
		position: 'absolute',
		top: 19,
		right: 17,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 16.17,
	},
});
