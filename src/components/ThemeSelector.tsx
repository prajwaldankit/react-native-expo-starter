import { View, TouchableHighlight, Image } from 'react-native';
import { useColorScheme } from 'nativewind';
import lightModeIcon from '@Assets/icons/lightMode.png';
import darkModeIcon from '@Assets/icons/darkMode.png';

export default function ThemeSelector() {
	const { colorScheme, toggleColorScheme } = useColorScheme();

	const icon = colorScheme === 'dark' ? lightModeIcon : darkModeIcon;

	return (
		<View className="right-3 bottom-3 absolute">
			<TouchableHighlight onPress={toggleColorScheme}>
				<Image source={icon} />
			</TouchableHighlight>
		</View>
	);
}
