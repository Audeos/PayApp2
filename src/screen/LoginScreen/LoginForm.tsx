import React, {useCallback} from "react";
import {styles} from "./style.ts";
import {Alert, Text, View} from "react-native";
import LoginInput from "../../components/LoginInput";
import WideModernButton from "../../components/WideModernButton";
import {useAppDispatch, useAppSelector} from "../../store";

export type FormProps = {
    onChangePhoneNumber: (text: string) => void,
    onChangeFullName?: (text: string) => void,
    onChangePassword: (text: string) => void,
    onChangePurpose: (text: "login" | "signup") => void,
    loginOnPress?: () => void,
    signupOnPress?: () => void,
}

const LoginForm: React.FC<FormProps> = (props) => {
    const {loginInputs} = useAppSelector(state => state.auth);

    const handleLoginPress = useCallback(() => {
        if (!loginInputs.phoneNumber || !loginInputs.password) {
            Alert.alert("Kullanıcı adı veya şifre boş")
        } else {
            //todo props
            // @ts-ignore
            navigation.navigate("MainMenuScreen")
        }
    }, []);

    const onChangePurpose = useCallback(() => {
        props.onChangePurpose("signup")
    }, [props.onChangePurpose]);

    return (
        <View style={styles.formContainer}>
            <Text style={{alignSelf: "center", marginTop: 100, fontSize: 25, marginBottom: 100}}>PayApp</Text>
            <View style={{gap: 20}}>
                <LoginInput
                    onChangeText={props.onChangePhoneNumber}
                    placeholder={"Telefon Numarası"}
                    type={"phone"}
                    value={loginInputs.phoneNumber}
                />
                <LoginInput
                    onChangeText={props.onChangePassword}
                    placeholder={"Şifre"}
                    type={"password"}
                    value={loginInputs.password}

                />
            </View>
            <View style={{marginTop: 85, gap: 28, alignSelf: "center"}}>
                <WideModernButton
                    onPress={handleLoginPress}
                    style={{backgroundColor: "#C0FFB0"}}
                    textStyle={{color: "#3C8900"}}
                    text={"Giriş Yap"}/>
                <WideModernButton
                    onPress={onChangePurpose}
                    textStyle={{color: "#5FB363"}}
                    text={"Hesap Oluştur"}/>
            </View>
        </View>
    )
}

export default React.memo(LoginForm)
