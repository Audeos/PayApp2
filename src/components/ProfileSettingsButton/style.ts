import {StyleSheet} from "react-native";
import {COLORS} from "../../utils/colors.ts";
import {Fonts} from "../../utils/fonts.ts";
export const styles = StyleSheet.create({
    settingsButtonContainer:{
        width:"100%",
        flexDirection:"row",
        borderBottomWidth:1, borderBottomColor:"#BBE0C3",
        alignItems:"center",
        gap:14,
        paddingVertical:15
    },
    settingsButtonText:{
        color:COLORS.DarkGreen4,
        fontSize:24,
        ...Fonts.RobotoCondensedRegularItalic,
    },
})
