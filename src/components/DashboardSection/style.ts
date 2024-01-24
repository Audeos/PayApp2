import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors.ts";
import {Fonts} from "../../utils/fonts.ts";

export const styles = StyleSheet.create({
    sectionHeader: {
        color: COLORS.HeaderColor,
        fontSize: 24,
        ...Fonts.RobotoCondensedRegularItalic,
        marginBottom: 2,
        marginLeft: 10,
        marginTop:15,
    },
    glassContainer: {
        width: "100%",
        borderRadius: 16,
        borderColor: COLORS.StrokeGreen,
        borderWidth: 1,
    },


})
