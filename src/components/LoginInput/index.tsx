import React, {useCallback, useMemo} from "react";
import {KeyboardTypeOptions, TextInput, TextInputProps} from "react-native";
import {styles} from "./style";
import {getOnlyNumbers, getOnlyWords} from "../../utils/textFormatter";

type InputProps = TextInputProps & {
    type: "phone" | "name" | "password",
}
const LoginInput: React.FC<InputProps> = (props) => {
    const {type, ...rest} = props;

    const onChangeText = useCallback((text: string) => {
        let formattedText = "";
        switch (props.type) {
            case "phone":
                formattedText = getOnlyNumbers(text);
                rest.onChangeText!(formattedText);
                break;
            case "name":
                formattedText = getOnlyWords(text);
                rest.onChangeText!(formattedText);
                break;
            case "password":
                rest.onChangeText!(text);
                break;
        }
    }, [props.type, rest.onChangeText]);

    const keyboardType: KeyboardTypeOptions = useMemo(() => {
        switch (props.type) {
            case "phone":
                return "number-pad"
            case "password":
                return "default"
            case "name":
                return "default"
            default:
                return "default"
        }
    }, [props.type]);

    return (
        <TextInput
            {...rest}
            keyboardType={keyboardType}
            secureTextEntry={props.type === "password"}
            maxLength={props.type === "phone" ? 11: undefined}
            onChangeText={onChangeText}
            style={styles.inputStyle}/>
    )
}

export default React.memo(LoginInput)
