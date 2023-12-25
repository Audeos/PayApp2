import React, {createRef, Ref, RefObject, useCallback, useImperativeHandle, useState} from "react";
import {KeyboardAvoidingView, Modal, Text, TouchableOpacity, View} from "react-native";
import ScreenWithLinearBackground from "../../components/ScreenWithLinearBackground";
import {styles} from "./style";
import Arrow from "../../assets/icons/svgs/thinArrow.svg"
import LoginInput from "../../components/LoginInput";
import WideModernButton from "../../components/WideModernButton";
import {FormProps} from "./LoginForm.tsx";
import {useAppSelector} from "../../store";


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
                <LoginInput
                    placeholder={"Telefon Numarası"}
                    onChangeText={props.onChangePhoneNumber}
                    type={"phone"}
                    value={signupInputs.phoneNumber}/>
                <LoginInput
                    placeholder={"Tam İsim"}
                    onChangeText={props.onChangeFullName}
                    type={"name"}
                    value={signupInputs.fullName}/>
                <LoginInput
                    onChangeText={props.onChangePassword}
                    placeholder={"Şifre"}
                    type={"password"}
                    value={signupInputs.password}/>
            </View>
            <WideModernButton onPress={handleSignupOnPress} style={{alignSelf:"center",backgroundColor: "#C0FFB0", marginTop: 35}} textStyle={{color: "#3C8900"}} text={"Hesap Oluştur"}/>
        </View>
    )
}

export default SignupForm
