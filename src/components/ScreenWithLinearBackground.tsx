import React, {useEffect, useState} from "react";
import {Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import LinearGradient from "react-native-linear-gradient";
import {COLORS} from "../utils/colors.ts";

type ScreenWithLinearBackgroundProps = {
    children: React.ReactNode,
    styleProps?: ViewStyle,
}
const ScreenWithLinearBackground: React.FC<ScreenWithLinearBackgroundProps> = (props) => {
    const insets = useSafeAreaInsets();

    return (
        <SafeAreaView style={{flex: 1, paddingTop: insets.top}}>
            <LinearGradient
                style={[{flex: 1, backgroundColor: "gray", width: "100%"}, props.styleProps]}
                colors={COLORS.GreenGradient}
                locations={[0, 0.8, 1]}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
            >
                {props.children}
            </LinearGradient>
        </SafeAreaView>
    )
}

export default ScreenWithLinearBackground
