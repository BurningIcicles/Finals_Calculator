import {Text, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

export default function Card() {
    const navigation = useNavigation();

    const onCardClick = () => {
        navigation.navigate('Course');
    };

    return (
        <TouchableOpacity className={"border-2 w-full h-28 mb-3 rounded-lg flex-row justify-between items-start"} onPress={onCardClick}>
            <Text className={"mt-3 ml-3 font-bold"}>CLASS NAME</Text>
            <Text className={"mt-3 mr-3"}>GRADE</Text>
        </TouchableOpacity>
    );
}