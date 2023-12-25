import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import MainMenuScreen from "./MainMenuScreen";
import GroupsScreen from "./GroupsScreen.tsx";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./LoginScreen";


type RootStackParamList = {
    LoginScreen: undefined;
    MainMenuScreen: undefined;
    GroupsScreen: undefined;
    ProfileScreen: undefined;
};

export type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList,"LoginScreen">
export type MainMenuNavigationProp = NativeStackNavigationProp<RootStackParamList,"MainMenuScreen">
export type GroupsNavigationProp = NativeStackNavigationProp<RootStackParamList,"GroupsScreen">
export type ProfileNavigationProp = NativeStackNavigationProp<RootStackParamList,"ProfileScreen">

const RootStack = createNativeStackNavigator<RootStackParamList>();
const Navigation: React.FC = (props) => {

    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={"LoginScreen"} screenOptions={{headerShown: false}}>
                <RootStack.Screen name={"LoginScreen"} component={LoginScreen}/>
                <RootStack.Screen name={"MainMenuScreen"} component={MainMenuScreen}/>
                <RootStack.Screen name={"GroupsScreen"} component={GroupsScreen}/>
                <RootStack.Screen name={"ProfileScreen"} component={ProfileScreen}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
