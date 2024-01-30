import React, {useEffect, useState} from "react";
import {Keyboard, TouchableWithoutFeedback, ViewStyle} from "react-native";

type KeyboardClosingWrapperProps = {
    children: React.ReactNode,
    styleProps?: ViewStyle,
}
const KeyboardClosingWrapper: React.FC<KeyboardClosingWrapperProps> = (props) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        console.log(isKeyboardVisible)
    }, [isKeyboardVisible]);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => {
                setKeyboardVisible(true); // or some other action
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => {
                setKeyboardVisible(false); // or some other action
            }
        );
        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
            accessible={false}
            disabled={!isKeyboardVisible}
             style={{flex: 1}}
        >
            {props.children}
        </TouchableWithoutFeedback>
    )
}

export default KeyboardClosingWrapper
