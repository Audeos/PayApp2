import React from "react";
import {Image, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import Screen from "../components/Screen";
import {useNavigation} from "@react-navigation/native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {DashboardNavigationProp} from "./Navigation.tsx";
import ScreenWithLinearBackground from "../components/ScreenWithLinearBackground.tsx";
import {COLORS} from "../utils/colors.ts";
import LinearGradient from "react-native-linear-gradient";
import {Fonts} from "../utils/fonts.ts";
import {Colors} from "react-native/Libraries/NewAppScreen";
import PersonSVG from "../../src/assets/dummy/person.svg"

const DashboardScreen: React.FC = (props) => {

    const navigation = useNavigation<DashboardNavigationProp>();

    const handleRoomsOnPress = () => {
        navigation.navigate("GroupsScreen");
    }

    const handleProfileOnPress = () => {
        navigation.navigate("ProfileScreen");
    }

    return (
        <ScreenWithLinearBackground styleProps={{backgroundColor: "gray", alignItems: "center"}} colors={COLORS.GreenGradient}>
            <View className={"p-[24px] w-screens"}>
                <Text className={"text-xl"}
                      style={{...Fonts.RobotoCondensedRegularItalic}}>
                    Kişilere Göre Toplam Borçlar
                </Text>
                <LinearGradient
                    colors={["rgba(243,243,243,0.50)", "rgba(217,217,217,0.0)"]}
                    locations={[0, 1]}
                    end={{x: 0, y: 1}}
                    start={{x: 1, y: 0}}
                    className={"w-full p-[18px] rounded-[16px] aspect-square"}
                    style={{
                        borderColor: COLORS.StrokeGreen,
                        borderWidth: 1,
                    }}
                >
                    <View
                        style={{backgroundColor: "rgba(229,229,229,0.4)", height: 49, borderRadius: 14, alignItems: "center", flexDirection: "row", paddingLeft: 16}}>
                        <View style={{width: 38, aspectRatio: 1, borderRadius: 99, borderWidth: 1, borderColor: Colors.white, justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
                            <PersonSVG/>
                        </View>
                        <Text style={{...Fonts.RobotoCondensedLightItalic, marginLeft: 15}}>Ert Demir</Text>
                    </View>

                </LinearGradient>

            </View>
        </ScreenWithLinearBackground>
    )
}

export default DashboardScreen
