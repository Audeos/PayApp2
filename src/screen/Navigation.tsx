import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenuScreen from "./MainMenuScreen";
import RoomListScreen from "./RoomListScreen";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./LoginScreen";


type RootStackParamList = {
    LoginScreen: undefined;
    MainMenuScreen: undefined;
    RoomListScreen: undefined;
    ProfileScreen: undefined;
};

type NavigationProps = {
    children: React.ReactNode,
}
const RootStack = createNativeStackNavigator<RootStackParamList>();
const Navigation: React.FC = (props) => {

    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={"LoginScreen"} screenOptions={{headerShown: false}}>
                <RootStack.Screen name={"LoginScreen"} component={LoginScreen}/>
                <RootStack.Screen name={"MainMenuScreen"} component={MainMenuScreen}/>
                <RootStack.Screen name={"RoomListScreen"} component={RoomListScreen}/>
                <RootStack.Screen name={"ProfileScreen"} component={ProfileScreen}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
