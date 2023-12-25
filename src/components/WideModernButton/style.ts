import {StyleSheet} from "react-native";
import {Fonts} from "../../utils/fonts";
export const styles = StyleSheet.create({
  buttonStyle:{
      backgroundColor:"white",
      width: 280, height: 53,
      borderRadius: 12,
      justifyContent: "center", alignItems: "center",
  },
    textStyle: {
        color:"green",
        fontSize:24,
        ...Fonts.RobotoCondensedRegularItalic,
    }
})
