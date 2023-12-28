import React, {ReactNode, useCallback} from "react";
import {Text, TouchableOpacity} from "react-native";
import LogoutIcon from "../../assets/icons/svgs/logout.svg";
import {styles} from "./style.ts";

type SettingsButtonProps = {
    onPress?: ()=>void,
    text:string,
    Icon: React.ElementType
}
const ProfileSettingsButton: React.FC<SettingsButtonProps> = (props) => {

    const onPress = useCallback(() => {

        props.onPress &&
        props.onPress();
    }, [props.onPress]);

return (
    <TouchableOpacity
        onPress={onPress}
        style={styles.settingsButtonContainer}>
        {props.Icon && <props.Icon/>}
        <Text style={styles.settingsButtonText}>{props.text}</Text>
    </TouchableOpacity>
)
}

export default ProfileSettingsButton
