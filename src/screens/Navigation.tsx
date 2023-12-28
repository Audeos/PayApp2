import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import DashboardScreen from "./DashboardScreen.tsx";
import GroupsScreen from "./GroupsScreen.tsx";
import ProfileScreen from "./ProfileScreen";
import LoginScreen from "./LoginScreen";
import {AnimatedTabBarNavigator} from "react-native-animated-nav-tab-bar";
import {COLORS} from "../utils/colors.ts";
import {HomeIcon} from "../assets/icons/tabbar/colorizer.tsx";
import DashboardIcon from "../assets/icons/tabbar/dashboard.svg";
import GroupsIcon from "../assets/icons/tabbar/groups.svg";
import FriendsIcon from "../assets/icons/tabbar/friends.svg";
import ProfileIcon from "../assets/icons/tabbar/profile.svg";
import {Colors} from "react-native/Libraries/NewAppScreen";
import FriendsScreen from "./FriendsScreen.tsx";
import {Fonts} from "../utils/fonts.ts";

type RootStackParamList = {
    LoginScreen: undefined;
    DashboardScreen: undefined;
    GroupsScreen: undefined;
    ProfileScreen: undefined;
    TabNavigation: undefined;
};

export type LoginNavigationProp = NativeStackNavigationProp<RootStackParamList, "LoginScreen">
export type DashboardNavigationProp = NativeStackNavigationProp<RootStackParamList, "DashboardScreen">
export type GroupsNavigationProp = NativeStackNavigationProp<RootStackParamList, "GroupsScreen">
export type ProfileNavigationProp = NativeStackNavigationProp<RootStackParamList, "ProfileScreen">

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
        <Tabs.Screen name={"GroupsScreen"} component={GroupsScreen}
                     options={{tabBarLabel: "Kişiler", tabBarIcon: ({focused = false}) => <FriendsIcon color={focused ? COLORS.DarkGreen2 : "white"}/>}}/>
        <Tabs.Screen name={"FriendsScreen"} component={FriendsScreen}
                     options={{tabBarLabel: "Gruplar", tabBarIcon: ({focused = false}) => <GroupsIcon color={focused ? COLORS.DarkGreen2 : "white"}/>}}/>
        <Tabs.Screen name={"ProfileScreen"} component={ProfileScreen}
                     options={{tabBarLabel: "Profil", tabBarIcon: ({focused = false}) => <ProfileIcon color={focused ? COLORS.DarkGreen2 : "white"}/>}}/>
    </Tabs.Navigator>
)

export default Navigation
