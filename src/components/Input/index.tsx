import React from "react";
import {styles} from "../../screens/ProfileScreen/ProfileModal/style.ts";
import {ibanFormatter} from "../../utils/textFormatter.ts";
import {StyleProp, TextInput, TextInputProps, TextStyle, ViewStyle} from "react-native";

type InputProps = {
    isPassword?: boolean;
    styleProps?: TextStyle
} & TextInputProps;
const Input: React.FC<InputProps> = (props) => {
    const {isPassword = false, styleProps,...rest} = props;

    return (
        <TextInput style={[styles.input, styles.elementSize, styles.border, styles.radius, {...styleProps}]}
                   placeholderTextColor={styles.placeholderColor.color}
                   {...rest}
        />
    )
}

export default Input
