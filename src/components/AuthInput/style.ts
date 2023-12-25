import {StyleSheet} from "react-native";
import {Fonts} from "../../utils/fonts";

export const styles = StyleSheet.create({
    inputStyle: {
        width: "100%",
		borderRadius: 12,
		fontSize: 24,
		lineHeight:24,
		paddingHorizontal: 11,
		backgroundColor: "white",
		...Fonts.RobotoCondensedLightItalic
    }
})
