import {StyleSheet} from "react-native";
import {Fonts} from "../../utils/fonts.ts";

export const styles = StyleSheet.create({
    rowContainer: {
        alignItems: "center", gap: 18
    },
    checkBox: {
        width: 30,
        aspectRatio: 1,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#D2D2D2",
    },
    checkBoxTick: {
        width: 22,
        aspectRatio: 1,
        backgroundColor: "#3cd407",
        borderRadius: 6,
    },
    text: {
        ...Fonts.RobotoCondensedExtraLightItalic,
        fontSize: 24,
    }
})
