import {Text, TouchableOpacity} from 'react-native'

export default function Header({title, onPress}) {
    return (
        <TouchableOpacity className={"flex-1 items-center border-2 border-gray-500 py-3 rounded-b-lg"} onPress={onPress}>
            <Text>
                {title}
            </Text>
        </TouchableOpacity>
    );
}