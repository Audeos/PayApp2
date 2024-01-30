import {StyleSheet} from "react-native";
import {Fonts} from "../../../utils/fonts.ts";
import {COLORS} from "../../../utils/colors.ts";

export const styles = StyleSheet.create({
    roomRowContainer: {
        flexDirection: "row", height: 60, backgroundColor: "#E1F1DD", paddingHorizontal: 16, width: "100%", alignItems: "center",
        borderRadius: 16,
    },
    tableHeaderText: {
        fontSize: 26,
        color: "#ececec",
        ...Fonts.RobotoCondensedLightItalic,
    },
    groupNameText: {
        fontSize: 20,
        ...Fonts.RobotoCondensedLightItalic,
    },
    itemCountText: {
        fontSize: 20,
        ...Fonts.RobotoCondensedExtraLightItalic,
    },
    roomPeopleImagesGroup: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    personImage: {
        position: "absolute",
        shadowColor: "black",
        shadowOffset: {width: 0, height: 12},
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 4, borderRadius:99
    },
    one: {
        zIndex: 10,
    },
    two: {
        zIndex: 9,
        left: 20,
    },
    three: {
        zIndex: 8,
        left: 40,
    }


})
