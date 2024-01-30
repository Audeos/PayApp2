import React from "react";
import {Text, TextStyle, TouchableOpacity, ViewStyle} from "react-native";
import {styles} from "./style";

type WideModernButtonProps = {
    onPress: () => void,
    style?: ViewStyle,
    textStyle?: TextStyle,
    text: string,
}

const WideModernButton: React.FC<WideModernButtonProps> = (props) => {

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.buttonStyle,props.style]}>
            <Text style={[styles.textStyle, props.textStyle]}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

export default WideModernButton
