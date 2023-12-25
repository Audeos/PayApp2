import {Platform, StyleSheet} from "react-native";
import {Fonts} from "../../utils/fonts";
import {screenWidth} from "../../utils/dimensions.ts";

export const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        padding: 67,
        paddingTop: Platform.OS === 'android' ? 32 : 24,
        width: screenWidth,
    },
    modalGoBackContainer: {
        flexDirection: "row",
        position: "absolute",
        alignItems: "center",
        gap: 16,
        top: 48,
        left: 18,
    },
    modalGoBackText: {
        fontSize: 32,
        color: "white",
        ...Fonts.RobotoCondensedLightItalic
    },
    modalBoldText: {
        fontSize: 40,
        color: "#fff",
        textAlign: "center",
        marginTop: 125,
        ...Fonts.RobotoCondensedRegularItalic,
    },
    modalInputGroup: {
        marginTop: 80,
        gap: 18,
    },
})
