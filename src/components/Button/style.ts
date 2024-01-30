import {StyleSheet} from "react-native";
import {Fonts} from "../../utils/fonts.ts";

export const styles = StyleSheet.create({
    button: {
        width: 155,
        height: 66,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20,
        ...Fonts.RobotoCondensedLightItalic,
        color: "white"
    },
})
