import React, {useEffect, useState} from "react";
import {Keyboard, SafeAreaView, TouchableWithoutFeedback, View, ViewStyle} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import KeyboardCloser from "./KeyboardClosingWrapper";


type ScreenProps = {
    children: React.ReactNode,
    styleProps?: ViewStyle,
}
const Screen: React.FC<ScreenProps> = (props) => {
    const insets = useSafeAreaInsets();

    return (
        <KeyboardCloser>
            <SafeAreaView style={{width: "100%", height: "100%", paddingTop: insets.top, ...props.styleProps}}>
                {props.children}
            </SafeAreaView>
        </KeyboardCloser>
    )
}

export default Screen
