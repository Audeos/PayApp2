import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors.ts";
import {Fonts} from "../../utils/fonts.ts";
import {Colors} from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    containerConstants: {
        alignSelf: "center",
        alignItems: "center", flexDirection: "row",
        borderRadius: 14,
        width: 310,
        elevation: 8,
    },
    personContainer: {
        backgroundColor: "#B2D4B0",
        height: 49,
        paddingLeft: 16,
    },
    greenRound: {
        borderRadius: 99,
        width: 32,
        aspectRatio: 1,
        backgroundColor: COLORS.DarkGreen2,
        justifyContent: "center",
        alignItems: "center"
    },
    personDebtText: {
        color: COLORS.IncomeGreen,
        fontSize: 14,
        ...Fonts.RobotoCondensedRegularItalic,
        marginLeft: "auto",
        marginRight: 16,
    },
    personNameText: {
        marginLeft: 15, width: "35%",
        fontSize: 16,
        ...Fonts.RobotoCondensedLightItalic,
    },
    groupContainer: {
        height: 54,
        backgroundColor: COLORS.LightGreen3,
        paddingHorizontal: 12
    },
    groupNameText: {
        fontSize: 20,
        ...Fonts.RobotoCondensedLightItalic,
        marginLeft: 15
    },
    groupCountText: {
        fontSize: 16,
        ...Fonts.RobotoCondensedExtraLightItalic
    },
    roundedImage: {
        width: 38, aspectRatio: 1, borderRadius: 99,
        justifyContent: "center", alignItems: "center"
    },
    borderImage: {
        borderWidth: 1, borderColor: Colors.white,
    }

})
