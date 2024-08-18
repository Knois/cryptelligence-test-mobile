import { useColorScheme } from 'react-native';

export function useThemeColor(props: { light?: string; dark?: string }) {
	const theme = useColorScheme() ?? 'light';
	const colorFromProps = props[theme];

	return colorFromProps;
}
