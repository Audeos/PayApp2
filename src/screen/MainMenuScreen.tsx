import React from "react";
import {Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import Screen from "../components/Screen";
import {useNavigation} from "@react-navigation/native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const MainMenuScreen: React.FC = (props) => {

    const navigation = useNavigation();

    const handleRoomsOnPress = () => {
        // @ts-ignore
        navigation.navigate("RoomListScreen");
    }

    const handleProfileOnPress = () => {
        // @ts-ignore
        navigation.navigate("ProfileScreen");
    }

    const handleLogoutOnPress = () => {
        navigation.goBack();
    }


    return (
        <Screen styleProps={{backgroundColor: "gray", alignItems: "center"}}>
            <TouchableOpacity
                onPress={handleLogoutOnPress}
                style={{backgroundColor: "pink", padding: 8}}>
                <Text>Çıkış yap</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{position: "absolute", borderRadius: 99, width: 60, aspectRatio: 1, right: 5, top: 100, backgroundColor: "red", justifyContent: "center", alignItems: "center"}}>
                <Text>friends</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{borderRadius: 99, width: 160, aspectRatio: 1, marginTop: 300, backgroundColor: "cyan", justifyContent: "center", alignItems: "center"}}
                onPress={handleRoomsOnPress}>
                <Text>Odalar</Text>
            </TouchableOpacity>


            <TouchableOpacity
                style={{borderRadius: 99, width: 100, aspectRatio: 1, marginTop: "auto", marginBottom: 20, backgroundColor: "orange", justifyContent: "center", alignItems: "center"}}
                onPress={handleProfileOnPress}>
                <Text>Profil</Text>
            </TouchableOpacity>

        </Screen>
    )
}

export default MainMenuScreen
