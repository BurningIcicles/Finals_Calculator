import {TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/Ionicons";

export default function CreateButton({onPress}) {
    return (
        <TouchableOpacity className={"absolute bottom-0 right-0 mr-3 mb-3 bg-gray-400 rounded-lg border-2 h-12 w-12 justify-center items-center"} onPress={onPress}>
            <Icon name={"add"} size={30} color="white" />
        </TouchableOpacity>
    );
}