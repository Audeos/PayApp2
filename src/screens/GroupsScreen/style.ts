import {StyleSheet} from "react-native";
import {Fonts} from "../../utils/fonts.ts";
import {COLORS} from "../../utils/colors.ts";

export const styles = StyleSheet.create({
    twinButtonContainer: {
        width: 155,
        height: 60,
        borderRadius: 12,
        justifyContent:"center",
        alignItems:"center"
    },
    whiteButton: {
        backgroundColor: "white",
        borderColor: COLORS.BorderGreen,
        borderWidth: 1,
    },
    greenButton: {
        backgroundColor: COLORS.DarkGreen5,
        borderColor: COLORS.BorderGreen,
        borderWidth: 1,
    },
    twinButtonText: {
        fontSize: 26,
        ...Fonts.RobotoCondensedLightItalic,
    }
})
