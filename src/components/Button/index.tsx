import React from "react";
import {PressableProps, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import {COLORS} from "../../utils/colors.ts";
import {styles} from "./style.ts";

export enum PresetStyleEnum {
    "WHITE-BORDER" = 0,
    "FULL-GREEN" = 1,
    "GREEN-BORDER",
}

const textColors = [
    {color: "#fff"},
    {color:"#E6ECE6"},
    {color:"#096B00"}
]

const buttonStyles = [
    {
        borderColor: "white",
        borderWidth: 1,
    },
    {
        backgroundColor: COLORS.DarkGreen5,
        borderColor: COLORS.BorderGreen,
        borderWidth: 1,
    },
    {
        backgroundColor: "white",
        borderColor: COLORS.BorderGreen,
        borderWidth: 1,
    },
]

type ButtonProps = {
    preset?: PresetStyleEnum;
    text: string;
    textStyles?: TextStyle;
    viewStyles?: ViewStyle;
} & PressableProps;

const Button: React.FC<ButtonProps> = (props) => {
    const {preset = 1, text, textStyles, viewStyles, ...rest} = props;
    if (preset === 1) {

    }
    return (
        <TouchableOpacity style={[styles.button, buttonStyles[preset], viewStyles]}>
            <Text style={[styles.text, textColors[preset], textStyles]}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button
