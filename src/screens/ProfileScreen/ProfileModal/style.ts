import {StyleSheet} from "react-native";
import {Fonts} from "../../../utils/fonts.ts";

export const styles = StyleSheet.create({
    view: {
        // alignItems: "center",
        flex:1,
        paddingHorizontal: 36,
    },
    goBackButton: {
        position: "absolute",
        left: 15,
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 26,
        width: "100%", justifyContent: "center",
        position: "relative",
    },
    modalHeaderText: {
        fontSize: 42,
        ...Fonts.RobotoCondensedExtraLightItalic,
    },
    modalInfoText: {
        fontSize: 22,
        ...Fonts.RobotoThin,
    },
    elementSize: {
        width: "100%",
        height: 66,
        backgroundColor: "#f5f5f5",
        paddingHorizontal: 25,
    },
    inputWithButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    input: {
        ...Fonts.RobotoCondensedExtraLightItalic,
        fontSize: 24,
    },
    placeholderColor:{
        color: "#847e7e",
    },
    radius: {borderRadius: 16},
    border: {
        borderWidth: 2,
        borderColor: "#D2D2D2",
    },
    submit: {
        backgroundColor: "#e7efe1",
        justifyContent: "center",
        alignItems: "center",
        marginTop:"auto",
    },
    submitText: {
        ...Fonts.RobotoCondensedRegularItalic,
        fontSize: 24,
        color: "#056604",
    },
    leftImage: {
        width:77,
        objectFit:"contain",
        height:"100%",
        marginRight:12,
    },
})
