import React, {useState} from "react";
import {styles} from "../../style.ts";
import {TextInput, TextInputProps, TouchableOpacity, View} from "react-native";
import EyeShow from "../../../../../assets/icons/svgs/eyeShow.svg";
import EyeHide from "../../../../../assets/icons/svgs/eyeHide.svg";

type SecureInputProps = {
    placeholder: string,

} & TextInputProps
const SecureInput: React.FC<SecureInputProps> = (props) => {
    const {placeholder, ...rest} = props;

    const [showPassword, setShowPassword] = useState<boolean>(false);


    return (
        <View style={[styles.inputWithButton, styles.elementSize, styles.border,styles.radius]}>
            <TextInput {...rest} secureTextEntry={showPassword} style={styles.input} placeholder={placeholder}/>
            <TouchableOpacity onPress={() => setShowPassword(prevState => !prevState)}>
                {showPassword ? <EyeShow/> : <EyeHide/>}
            </TouchableOpacity>
        </View>
    )
}

export default SecureInput
