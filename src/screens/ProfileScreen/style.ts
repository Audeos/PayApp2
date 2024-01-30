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
    addCardButton:{
        paddingHorizontal:10,
        borderRadius:12,
        backgroundColor:COLORS.FillSoftGreen,
        borderColor:COLORS.BorderSoftGreen,
        borderWidth:1,
        flexDirection:"row",
        gap:3,
    },
    addCardText:{
        fontSize:18,
        color:"#056604",
        ...Fonts.RobotoCondensedLightItalic
    },
    addCardPlus:{
        fontSize:24,
        lineHeight:24,
        color:"#056604",
        ...Fonts.RobotoCondensedLight
    },
})
