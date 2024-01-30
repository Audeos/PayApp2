import React from "react";
import {Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import {styles} from "./style.ts";

type CheckBoxProps = {
    text?: string;
    onToggle: () => void;
    value: boolean;
    viewStyles?: ViewStyle;
    outerStyles?: ViewStyle;
    innerStyles?: ViewStyle;
    textStyles?: TextStyle;
    alignLeft?: boolean;
}
const CheckBox: React.FC<CheckBoxProps> = (props) => {
    const {text, onToggle, value, viewStyles, outerStyles, innerStyles, textStyles, alignLeft = true, ...rest} = props;

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.rowContainer, viewStyles, {flexDirection: alignLeft ? "row" : "row-reverse"}]}
            onPress={onToggle}
        >
            <View
                style={[styles.checkBox, outerStyles]}>
                {value ? <View style={[styles.checkBoxTick, innerStyles]}/> : undefined}
            </View>
            <Text style={[styles.text, textStyles]}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default CheckBox
