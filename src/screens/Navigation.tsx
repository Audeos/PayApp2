import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import DashboardScreen from "./DashboardScreen";
import GroupsScreen from "./GroupRoute/GroupsScreen";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./LoginScreen";
import {AnimatedTabBarNavigator} from "react-native-animated-nav-tab-bar";
import {COLORS} from "../utils/colors.ts";
import DashboardIcon from "../assets/icons/tabbar/dashboard.svg";
import GroupsIcon from "../assets/icons/tabbar/groups.svg";
import FriendsIcon from "../assets/icons/tabbar/friends.svg";
import ProfileIcon from "../assets/icons/tabbar/profile.svg";
import FriendsScreen from "./FriendsScreen";
import {Fonts} from "../utils/fonts.ts";
import GroupRoute from "./GroupRoute";

type RootStackParamList = {
    LoginScreen: undefined;
    DashboardScreen: undefined;
    GroupsStack: undefined;
    ProfileScreen: undefined;
    TabNavigation: undefined;
};

export type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, "LoginScreen">
export type DashboardNavigationProp = NativeStackNavigationProp<RootStackParamList, "DashboardScreen">
export type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "ProfileScreen">

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Navigation: React.FC = (props) => {

    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName={"LoginScreen"} screenOptions={{headerShown: false}}>
                <RootStack.Screen name={"LoginScreen"} component={LoginScreen}/>
                <RootStack.Screen name={"TabNavigation"} component={TabNavigation}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

const Tabs = AnimatedTabBarNavigator();

const TabNavigation = () => (
    <Tabs.Navigator
        id={"TabNavigation"}
        tabBarOptions={{activeTintColor: COLORS.DarkGreen2, inactiveTintColor: "#000", labelStyle: {...Fonts.RobotoCondensedBoldItalic}}}
        initialRouteName={"MainMenuScreen"}
        appearance={{floating: true, horizontalPadding: 14, tabBarBackground: COLORS.DarkGreen2, activeTabBackgrounds: "white"}}>
        <Tabs.Screen name={"DashboardScreen"} component={DashboardScreen}
                     options={{tabBarLabel: "Özet", tabBarIcon: ({focused = false}) => <DashboardIcon color={focused ? COLORS.DarkGreen2 : "white"}/>}}/>
        <Tabs.Screen name={"FriendsScreen"} component={FriendsScreen}
                     options={{tabBarLabel: "Kişiler", tabBarIcon: ({focused = false}) => <FriendsIcon color={focused ? COLORS.DarkGreen2 : "white"}/>}}/>
        <Tabs.Screen name={"GroupsStack"} component={GroupRoute}
                     options={{tabBarLabel: "Gruplar", tabBarIcon: ({focused = false}) => <GroupsIcon color={focused ? COLORS.DarkGreen2 : "white"}/>}}/>
        <Tabs.Screen name={"ProfileStack"} component={ProfileScreen}
                     options={{tabBarLabel: "Profil", tabBarIcon: ({focused = false}) => <ProfileIcon color={focused ? COLORS.DarkGreen2 : "white"}/>}}/>
    </Tabs.Navigator>
)

export default Navigation
