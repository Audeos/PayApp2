import {StyleSheet} from "react-native";
import {Fonts} from "../../utils/fonts.ts";
import {COLORS} from "../../utils/colors.ts";

export const styles = StyleSheet.create({
    profileImageContainer: {
        width: 130, marginTop: 30, aspectRatio: 1, borderRadius: 99, alignSelf: "center",
        overflow: "hidden"
    },
    noImageContainer: {
        flex: 1, backgroundColor:COLORS.DarkGreen3, justifyContent: "center", alignItems: "center"
    },
    nameContainer: {
        marginTop: 20
    },
    nameText: {
        fontSize: 20, ...Fonts.RobotoCondensedLightItalic
    },
    friendIdContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 2,
        height: 24,
        gap: 5,
    },
    friendIdText: {
        fontSize: 20, ...Fonts.RobotoCondensedExtraLightItalic,
        lineHeight: 24
    },
    cardContainer: {
        width: "100%",
        height: 86
    },
    cardContainerHeader: {
        width: "100%",
        height: 24,
        flexDirection: "row",
        justifyContent: "space-between"
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
        fontSize: 26,
        ...Fonts.RobotoCondensedRegularItalic,
    },




})
