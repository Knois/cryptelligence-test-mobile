import formStore from '@/store/FormStore';
import todoStore from '@/store/TodoStore';
import { ITodo } from '@/types/Todo';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Todo from '../todo';
import Form from './Form';

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }: { item: ITodo | string }) =>
	typeof item === 'string' ? <Form /> : <Todo key={item.id} todo={item} />;

const keyExtractor = (item: ITodo | string) =>
	typeof item === 'string' ? 'form-placeholder' : item.id.toString();

const List = () => {
	const flatListRef = useRef<FlatList<ITodo | string>>(null);

	const data = formStore.isOpen
		? [...todoStore.todos, 'FORM_PLACEHOLDER']
		: todoStore.todos;

	useLayoutEffect(() => {
		todoStore.getAllTodos();
	}, []);

	useEffect(() => {
		if (formStore.isOpen) {
			flatListRef.current?.scrollToEnd({ animated: true });
		}
	}, [formStore.isOpen]);

	return (
		<FlatList
			data={data}
			renderItem={renderItem}
			keyExtractor={keyExtractor}
			style={styles.list}
			ItemSeparatorComponent={ItemSeparator}
			contentContainerStyle={styles.contentContainerStyle}
			ref={flatListRef}
		/>
	);
};

export default observer(List);

const styles = StyleSheet.create({
	list: {
		flex: 1,
		width: '100%',
		backgroundColor: 'none',
		marginTop: 20,
	},

	contentContainerStyle: {
		paddingHorizontal: 22,
		paddingBottom: 10,
		paddingTop: 15,
	},

	separator: {
		height: 17,
	},
});
