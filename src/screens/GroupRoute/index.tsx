import React from "react";
import {createNativeStackNavigator, NativeStackNavigationProp} from "@react-navigation/native-stack";
import GroupsScreen from "./GroupsScreen";
import GroupLogScreen from "./GroupLogScreen";

type GroupStackParamList = {
    GroupsScreen: undefined;
    GroupLogScreen: undefined;
}


export type GroupsNavigationProp = NativeStackNavigationProp<GroupStackParamList, "GroupsScreen">
export type GroupLogNavigationProp = NativeStackNavigationProp<GroupStackParamList, "GroupLogScreen">

const GroupStack = createNativeStackNavigator<GroupStackParamList>();

const GroupRoute: React.FC = (props) => {


return (
<GroupStack.Navigator id={"GroupStack"} initialRouteName={"GroupsScreen"}
                      screenOptions={{headerShown:false}}>
    <GroupStack.Screen name={"GroupsScreen"} component={GroupsScreen}/>
    <GroupStack.Screen name={"GroupLogScreen"} component={GroupLogScreen}/>
</GroupStack.Navigator>
)
}

export default GroupRoute
