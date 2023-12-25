import React from "react";
import {Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import Screen from "../components/Screen";
import {useNavigation} from "@react-navigation/native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {MainMenuNavigationProp} from "./Navigation.tsx";
import ScreenWithLinearBackground from "../components/ScreenWithLinearBackground.tsx";
import {COLORS} from "../utils/colors.ts";

const MainMenuScreen: React.FC = (props) => {

    const navigation = useNavigation<MainMenuNavigationProp>();

    const handleRoomsOnPress = () => {
        navigation.navigate("GroupsScreen");
    }

    const handleProfileOnPress = () => {
        navigation.navigate("ProfileScreen");
    }

    const handleLogoutOnPress = () => {
        navigation.goBack();
    }
    return (
        <ScreenWithLinearBackground styleProps={{backgroundColor: "gray", alignItems: "center"}} colors={COLORS.GreenGradient}>
            <TouchableOpacity
                onPress={handleLogoutOnPress}
                style={{backgroundColor: "pink", padding: 8}}>
                <Text>Çıkış yap</Text>
            </TouchableOpacity>
            <Text >
                Kişilere Göre Toplam Borçlar
            </Text>

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

        </ScreenWithLinearBackground>
    )
}

export default MainMenuScreen
