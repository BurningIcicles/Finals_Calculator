import React from 'react';
import { View } from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Courses from './Pages/Courses';
import Profile from './Pages/Profile';
import {TailwindProvider} from "tailwindcss-react-native";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import GradeWeights from "./Pages/GradeWeights";
import GradingScale from "./Pages/GradingScale";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Course() {
    const navigation = useNavigation();

    const onGradeWeightsClick = () => {
        navigation.navigate("Course", {screen: "GradeWeights"});
    };

    const onGradingScaleClick = () => {
        navigation.navigate("Course", {screen: "GradingScale"});
    };

    return (
        <TailwindProvider>
            <View className={"flex-row items-start justify-start h-auto w-full bg-gray-200"}>
                <Header title={"Grade Weights"} onPress={onGradeWeightsClick} />
                <Header title={"Grading Scale"} onPress={onGradingScaleClick} />
            </View>
            <Tab.Navigator id="CourseNavigator" initialRouteName={"GradeWeights"} screenOptions={{
                headerShown: false,
                tabBarStyle: {display: 'none'}
            }}>
                <Tab.Screen name="GradeWeights" component={GradeWeights} />
                <Tab.Screen name="GradingScale" component={GradingScale} />
            </Tab.Navigator>
        </TailwindProvider>
    );
}

export default function App() {
    return (
        <TailwindProvider>
            <NavigationContainer>
                <View className="h-full w-full justify-end">
                    <Stack.Navigator initialRouteName="Courses" screenOptions={{ headerShown: false }} id="RootNavigator">
                        <Stack.Screen name="Courses" component={Courses}/>
                        <Stack.Screen name="Profile" component={Profile}/>
                        <Stack.Screen name="Course" component={Course}/>
                    </Stack.Navigator>
                    <Navbar/>
                </View>
            </NavigationContainer>
        </TailwindProvider>
    );
}

