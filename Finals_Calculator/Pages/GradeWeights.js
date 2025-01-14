import {TailwindProvider} from "tailwindcss-react-native";
import {TextInput, View, Text, TouchableOpacity} from "react-native";
import CreateButton from "../Components/CreateButton";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {useNavigation} from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function GradeWeights() {
    const navigation = useNavigation();

    function onCreateClick() {
        navigation.navigate("GradeWeights", {screen: "Create"});
    }

    return (
        <TailwindProvider>
            <Tab.Navigator id={"GradeWeightNavigator"} initialRouteName={"List"} screenOptions={{
                headerShown: false,
                tabBarStyle: {display: 'none'}
            }}>
                <Tab.Screen name="List" component={List}></Tab.Screen>
                <Tab.Screen name="Create" component={Create}></Tab.Screen>
            </Tab.Navigator>
            <CreateButton onPress={onCreateClick}/>
        </TailwindProvider>
    );
}

function List() {
    return (
        <View>
            <Text>
                List
            </Text>
        </View>
    );
}

function Create() {
    const navigation = useNavigation();

    function onCloseClick() {
        navigation.navigate("GradeWeights", {screen: "List"})
    }

    function onSaveClick() {

        navigation.navigate("GradeWeights", {screen: "List"})
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
            <View className={"flex-row mt-6 mx-8"}>
                <Text className={"flex-1 text-left bg-gray-200 rounded-lg"}>
                    Weight
                </Text>
                <TextInput
                    className={"ml-auto text-center bg-gray-200 rounded-lg"}
                    placeholder={"Enter Weight"}
                />
            </View>
            <View className={"flex-row mt-6 mx-8"}>
                <Text className={"flex-1 text-left bg-gray-200 rounded-lg"}>
                    Current Percent
                </Text>
                <TextInput
                    className={"ml-auto text-center bg-gray-200 rounded-lg"}
                    placeholder={"Enter Current Percentage"}
                />
            </View>
            <TouchableOpacity onPress={onSaveClick} className={"bg-gray-400 border-2 rounded-lg mt-6"}>
                <Text className={"text-center"}>Save</Text>
            </TouchableOpacity>
        </TailwindProvider>
    );
}
