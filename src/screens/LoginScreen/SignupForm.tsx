import React, {createRef, Ref, RefObject, useCallback, useImperativeHandle, useState} from "react";
import {KeyboardAvoidingView, Modal, Text, TouchableOpacity, View} from "react-native";
import ScreenWithLinearBackground from "../../components/ScreenWithLinearBackground";
import {styles} from "./style";
import Arrow from "../../assets/icons/svgs/thinArrow.svg"
import AuthInput from "../../components/AuthInput";
import WideModernButton from "../../components/AuthButton";
import {FormProps} from "./LoginForm.tsx";
import {useAppSelector} from "../../store";
import {COLORS} from "../../utils/colors.ts";


const SignupForm: React.FC<FormProps> = (props) => {
    const {signupInputs} = useAppSelector(state => state.auth);

    const handleGoBackOnPress = useCallback(() => {
        props.onChangePurpose("login")
    }, [props.onChangePurpose]);

    const handleSignupOnPress = useCallback(() => {
        console.log("signup")
    }, []);

    return (
        <View style={styles.formContainer}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleGoBackOnPress}
                style={styles.modalGoBackContainer}>
                <Arrow width={30} height={30}/>
                <Text style={styles.modalGoBackText}>Giriş Yap</Text>
            </TouchableOpacity>
            <Text style={styles.modalBoldText}>Sadece 3 adımla kolaylığı keşfet</Text>
            <View style={styles.modalInputGroup}>
                <AuthInput
                    placeholder={"Telefon Numarası"}
                    onChangeText={props.onChangePhoneNumber}
                    type={"phone"}
                    value={signupInputs.phoneNumber}/>
                <AuthInput
                    placeholder={"Tam İsim"}
                    onChangeText={props.onChangeFullName}
                    type={"name"}
                    value={signupInputs.fullName}/>
                <AuthInput
                    onChangeText={props.onChangePassword}
                    placeholder={"Şifre"}
                    type={"password"}
                    value={signupInputs.password}/>
            </View>
            <WideModernButton onPress={handleSignupOnPress}
                              style={{alignSelf: "center", backgroundColor: COLORS.LightGreen, marginTop: 35}}
                              textStyle={{color: COLORS.DarkGreen}}
                              text={"Hesap Oluştur"}/>
        </View>
    )
}

export default React.memo(SignupForm);
