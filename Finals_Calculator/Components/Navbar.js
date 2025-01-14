import {Text, TouchableOpacity, View} from "react-native";
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();

    const onCoursesClick = () => {
        navigation.navigate('Courses');
    };

    const onProfileClick = () => {
        navigation.navigate('Profile');
    };

    return (
        <View className={"flex-row items-center justify-end"}>
            <TouchableOpacity className={"flex-1 items-center py-4 bg-red-400"} onPress={onCoursesClick}>
                <Text>COURSES</Text>
            </TouchableOpacity>
            <TouchableOpacity className={"flex-1 items-center py-4 m-0 bg-blue-400"} onPress={onProfileClick} >
                <Text>PROFILE</Text>
            </TouchableOpacity>
        </View>
    )
};



export default Navbar;