import {StyleSheet} from "react-native";
import {Fonts} from "../../../utils/fonts.ts";

export const styles = StyleSheet.create({
    headerContainer: {
        height: 94,
        width: "100%",
        backgroundColor: "rgba(217,217,217,0.2)",
        borderBottomWidth: 1,
        borderBottomColor: "#b5dba2",
        flexDirection: "row",
        paddingLeft: 18,
        paddingRight: 24,
        alignItems: "center",
    },
    groupName: {
        fontSize: 24,
        ...Fonts.RobotoCondensedRegularItalic,
        color: "white",
        marginLeft: 29,
        flex: 1,
    },
    settings: {
        transform: [{rotateZ: "90deg"}],
        color: "white",
        fontSize: 42,
        marginLeft: "auto",
    },
    row: {
        width: "100%",
        flexDirection: "row",
        gap:-2
    },
    person: {
        flexDirection: "row",
        alignItems:"center",
    },
    messageBlock: {
        width: 180,
        backgroundColor: "#ABDCA6",
        borderRadius: 14,
        minHeight: 50,
        paddingVertical:5,
        paddingHorizontal:9,
        marginBottom:"auto",
    },
    message:{
      fontSize:12,
      ...Fonts.RobotoCondensedLightItalic,
    },
    messageCash:{
      ...Fonts.RobotoCondensedRegularItalic,
    },
    messageSender:{
        fontSize:12,
        ...Fonts.RobotoCondensedLightItalic,
        color:"#585858",
        marginTop:"auto",
    },
    triangle: {
        alignSelf: "center",
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderLeftWidth: 14,
        borderRightWidth: 14,
        borderBottomWidth: 24,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "#ABDCA6",
        transform: [{rotateZ: "-90deg"}]
    },
})
