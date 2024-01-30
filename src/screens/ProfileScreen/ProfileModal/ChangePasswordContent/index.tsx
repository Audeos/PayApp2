import React, {useState} from "react";
import {Text, TextInput, TouchableHighlightComponent, TouchableOpacity, View} from "react-native";
import {styles} from "../style.ts";
import SecureInput from "./SecureInput";
import Screen from "../../../../components/Screen.tsx";

type InputTypes = {
    oldPassword: string,
    newPassword: string,
}
const ChangePasswordContent: React.FC = (props) => {
    const [inputs, setInputs] = useState<InputTypes>({
        oldPassword: "",
        newPassword: "",
    })

    return (
        <Screen styleProps={styles.view}>
            <View style={{marginTop: 58, gap: 28}}>
                <SecureInput
                    value={inputs.oldPassword}
                    onChangeText={(text) => setInputs(prevState => ({...prevState, oldPassword: text}))}
                    placeholder={"Eski Şifre"}/>
                <SecureInput
                    value={inputs.newPassword}
                    onChangeText={(text) => setInputs(prevState => ({...prevState, newPassword: text}))}
                    placeholder={"Yeni Şifre"}/>
            </View>

            <TouchableOpacity style={[styles.elementSize, styles.border, styles.radius,styles.submit, {marginTop: 64}]}>
                <Text style={styles.submitText}>
                    Şifremi Değiştir
                </Text>
            </TouchableOpacity>
        </Screen>
    )
}

export default ChangePasswordContent
