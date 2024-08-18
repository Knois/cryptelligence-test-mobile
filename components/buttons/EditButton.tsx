import formStore from '@/store/FormStore';
import { ITodo } from '@/types/Todo';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = { todo: ITodo };

const EditButton: React.FC<Props> = ({ todo }) => {
	const handlePress = () => {
		formStore.editTodo(todo);
	};

	return (
		<Pressable onPress={handlePress}>
			<Svg width={22} height={22} fill='none'>
				<Path
					stroke='#000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M16 2a2.827 2.827 0 1 1 4 4L6.5 19.5 1 21l1.5-5.5L16 2Z'
				/>
			</Svg>
		</Pressable>
	);
};
export default observer(EditButton);
