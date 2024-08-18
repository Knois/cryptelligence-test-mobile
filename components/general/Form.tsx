import { Colors } from '@/constants/Colors';
import formStore from '@/store/FormStore';
import todoStore from '@/store/TodoStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

const Form: React.FC = () => {
	if (!formStore.isOpen) return null;

	const onChangeTitle = (text: string) => formStore.setTitle(text);

	const onChangeDescription = (text: string) => formStore.setDescription(text);

	const handlePressCancel = () => formStore.reset();

	const handlePressDone = () => {
		formStore.id
			? todoStore.update(formStore.title, formStore.description, formStore.id)
			: todoStore.create(formStore.title, formStore.description);
		formStore.reset();
	};

	return (
		<View style={styles.form}>
			<View style={styles.inputs}>
				<TextInput
					value={formStore.title}
					onChangeText={onChangeTitle}
					style={styles.input}
					placeholder='Title'
					placeholderTextColor='#828282'
				/>

				<TextInput
					value={formStore.description}
					onChangeText={onChangeDescription}
					style={{ ...styles.input, ...styles.inputTextArea }}
					placeholder='Description'
					placeholderTextColor='#828282'
					multiline
				/>
			</View>

			<View style={styles.buttons}>
				<Pressable onPress={handlePressCancel} style={styles.button}>
					<Text style={styles.buttonText}>Cancel</Text>
				</Pressable>

				<Pressable
					onPress={handlePressDone}
					style={{ ...styles.button, ...styles.buttonViolet }}
				>
					<Text style={{ ...styles.buttonText, ...styles.buttonTextWhite }}>
						Done
					</Text>
				</Pressable>
			</View>
		</View>
	);
};

export default observer(Form);

const styles = StyleSheet.create({
	form: {
		width: '100%',
		borderRadius: 15,
		paddingTop: 22,
		paddingRight: 22,
		paddingBottom: 13,
		paddingLeft: 13,
		gap: 15,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 4 },
		shadowOpacity: 0.1,
		shadowRadius: 32,
		elevation: 5,
		marginBottom: 10,
	},

	inputs: {
		flexDirection: 'column',
		gap: 11,
	},

	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	input: {
		height: 40,
		width: '100%',
		backgroundColor: '#FCFAFF',
		borderRadius: 8,
		fontSize: 16,
		lineHeight: 16,
		fontFamily: 'LexendDecaRegular',
		paddingHorizontal: 16,
		paddingVertical: 12,
	},

	inputTextArea: {
		height: 255,
		textAlignVertical: 'top',
	},

	buttonText: {
		fontSize: 16,
		fontFamily: 'LexendDecaRegular',
		lineHeight: 20,
		color: Colors.violet,
	},

	buttonTextWhite: {
		color: '#fff',
	},

	button: {
		width: 121,
		height: 36,
		borderWidth: 1,
		borderColor: Colors.violet,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonViolet: {
		backgroundColor: Colors.violet,
	},
});
