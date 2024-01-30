import React, {ReactNode, useCallback} from "react";
import {Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import LogoutIcon from "../../assets/icons/svgs/logout.svg";
import {styles} from "./style.ts";
import {GestureResponderEvent} from "react-native/Libraries/Types/CoreEventTypes";

type SettingsButtonProps = {
    text: string,
    Icon: React.ElementType,
    onPress?: () => void,
} & TouchableOpacityProps
const ProfileSettingsButton: React.FC<SettingsButtonProps> = (props) => {
    const {text, Icon, ...rest} = props;

    return (
        <TouchableOpacity
            style={styles.settingsButtonContainer}
            {...rest}
        >
            {Icon && <props.Icon/>}
            <Text style={styles.settingsButtonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ProfileSettingsButton
