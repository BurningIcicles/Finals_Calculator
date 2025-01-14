import {ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Card from "../Components/Card";
import CreateButton from "../Components/CreateButton";
import {TailwindProvider} from "tailwindcss-react-native";
import {useNavigation} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function Courses() {
    return (
        <TailwindProvider>
            <Tab.Navigator initialRouteName={"List"} screenOptions={{ headerShown: false, tabBarStyle: {display: "none"} }}>
                <Tab.Screen name={"List"} component={List}></Tab.Screen>
                <Tab.Screen name={"Create"} component={Create}></Tab.Screen>
            </Tab.Navigator>
        </TailwindProvider>
    );
}

function List() {
    const navigation = useNavigation();

    function onCreateClick() {
        navigation.navigate("Courses", {screen: "Create"});
    }

    return (
        <View className={"h-full w-full"}>
            <ScrollView className="w-full h-full mt-10 px-3">
                <Card/>
                <Card/>
            </ScrollView>
            <CreateButton onPress={onCreateClick}/>
        </View>
    );
}

function Create() {
    const navigation = useNavigation();

    function onCloseClick() {
        navigation.navigate("Courses", {screen: "List"})
    }

    async function onSaveClick() {
        navigation.navigate("Courses", {screen: "List"})
    }

    return (
        <TailwindProvider>
            <TouchableOpacity onPress={onCloseClick}>
                <Icon name={"close"} size={30} color="black" />
            </TouchableOpacity>
            <View className={"flex-row mt-12 mx-8"}>
                <Text className={"flex-1 text-left bg-gray-200 rounded-lg"}>
                    Name
                </Text>
                <TextInput
                    className={"ml-auto text-center bg-gray-200 rounded-lg"}
                    placeholder={"Enter Name"}
                />
            </View>
            <TouchableOpacity onPress={onSaveClick} className={"bg-gray-400 border-2 rounded-lg mt-6"}>
                <Text className={"text-center"}>Save</Text>
            </TouchableOpacity>
        </TailwindProvider>
    );
}