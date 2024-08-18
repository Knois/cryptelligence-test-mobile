import todoStore from '@/store/TodoStore';
import { ITodo } from '@/types/Todo';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';

type Props = { id: ITodo['id'] };

const DeleteButton: React.FC<Props> = ({ id }) => {
	const handlePress = () => {
		todoStore.delete(id);
	};

	return (
		<Pressable onPress={handlePress}>
			<Svg width={24} height={24} fill='none'>
				<Path
					stroke='#000'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6'
				/>
			</Svg>
		</Pressable>
	);
};
export default observer(DeleteButton);
