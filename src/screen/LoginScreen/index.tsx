import React, {createRef, useCallback, useEffect, useRef, useState} from "react";
import {Alert, Animated, Easing, Keyboard, Modal, NativeSyntheticEvent, SafeAreaView, ScrollView, Text, TextInput, TextInputChangeEventData, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {useNavigation} from '@react-navigation/native';
import ScreenWithLinearBackground from "../../components/ScreenWithLinearBackground";
import SignupForm from "./SignupForm.tsx";
import {screenHeight, screenWidth} from "../../utils/dimensions.ts";
import {styles} from "./style.ts";
import LoginForm from "./LoginForm.tsx";
import {useAppDispatch, useAppSelector} from "../../store";
import authSlice, {changeFullNameAction, changePasswordAction, changePhoneNumberAction, changePurposeAction} from "../../store/authSlice.ts";
import {COLORS} from "../../utils/colors.ts";


type LoginInputFields = {
    phoneNumber: string,
    password: string,
}
const LoginScreen: React.FC = (props) => {
    const [userLoginInput, setUserLoginInput] = useState<LoginInputFields>({password: "", phoneNumber: ""});
    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const handleChangePhoneNumber = useCallback((text: string) => {
        dispatch(changePhoneNumberAction(text))
    }, [dispatch])

    const handleChangeFullName = useCallback((text: string) => {
        dispatch(changeFullNameAction(text))
    }, [dispatch])

    const handleChangePassword = useCallback((text: string) => {
        dispatch(changePasswordAction(text))
    }, [dispatch])

    const handleChangePurpose = useCallback((purpose: "login" | "signup") => {
        dispatch(changePurposeAction(purpose))
    }, [dispatch]);

    //#region PageState Animation
    const {isLoggingPurpose} = useAppSelector(state => state.auth);
    const translateX = useRef(new Animated.Value(screenWidth)).current;

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: isLoggingPurpose ? 0 : -screenWidth,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.bezier(0.4, 0, 1, 1),
        }).start();
    }, [isLoggingPurpose, translateX]);
    //#endregion PageState Animation

    return (
        <ScreenWithLinearBackground
            colors={COLORS.GreenGradient}>
            <ScrollView
                style={{flex: 1}}
                contentContainerStyle={{flexGrow: 1}}>
                <Animated.View
                    style={{
                        flex: 1,
                        width: screenWidth * 2,
                        display: 'flex',
                        flexDirection: 'row',
                        transform: [{translateX: translateX}],
                    }}>
                    <LoginForm
                        onChangePhoneNumber={handleChangePhoneNumber}
                        onChangePassword={handleChangePassword}
                        onChangePurpose={handleChangePurpose}
                    />
                    <SignupForm
                        onChangePhoneNumber={handleChangePhoneNumber}
                        onChangePassword={handleChangePassword}
                        onChangeFullName={handleChangeFullName}
                        onChangePurpose={handleChangePurpose}/>
                </Animated.View>
            </ScrollView>

        </ScreenWithLinearBackground>
    )
}

export default LoginScreen
