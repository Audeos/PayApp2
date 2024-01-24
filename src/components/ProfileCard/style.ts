import {StyleSheet} from "react-native";
import {Fonts} from "../../utils/fonts.ts";
import {COLORS} from "../../utils/colors.ts";

export const styles = StyleSheet.create({
    cardContainer: {
        width: "100%",
        height: 86
    },
    cardContainerHeader: {
        width: "100%",
        height: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom:3,
    },
    bankNameText: {
        fontSize: 18,
        ...Fonts.RobotoCondensedExtraLightItalic
    },
    cardContainerBody: {
        width: "100%",
        height: 54,
        backgroundColor: "rgba(211,211,211,0.2)",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 5,
        gap: 5
    },
    IbanText: {
        fontSize: 24,
        ...Fonts.RobotoCondensedRegularItalic,
    },
    preferredCardContainer: {
        height: 102,
        width: "100%",
    },
    preferredCardContainerBody: {
        width: "100%",
        height: 73,
        backgroundColor: COLORS.FillSoftGreen,
        borderColor: COLORS.BorderSoftGreen,
        borderWidth: 1,
        borderRadius: 12,
        alignItems: "center",
        paddingHorizontal: 5,
    },
    preferredText: {
        fontSize: 16,
        ...Fonts.RobotoCondensedExtraLightItalic
    },
})
