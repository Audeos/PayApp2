import Navigation from "./src/screen/Navigation";
import React, {useCallback, useEffect} from "react";
import {Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, View} from "react-native";
import {Provider} from "react-redux";
import store from "./src/store";


export default function App() {

    return (
        <Provider store={store}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView
                style={[{flex: 1}]}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <Navigation/>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
        </Provider>
    );
}
