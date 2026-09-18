import { View, Text } from 'react-native';

export default function Filter() {
	return (
		<View className="flex flex-row justify-evenly bg-slate-600 w-screen h-10">
			<Text className="bg-zinc-200 border-red-900 h-full">All</Text>
			<Text className="bg-zinc-200 border-red-900 h-full">Completed</Text>
			<Text className="bg-zinc-200 border-red-900 h-full">Incomplete</Text>
		</View>
	);
}
