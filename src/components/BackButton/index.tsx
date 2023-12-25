import React from "react";
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const BackButton: React.FC = (props) => {
const navigation = useNavigation();

const handleOnPress = () => {
    navigation.goBack();
}
return (
    <TouchableOpacity
        onPress={handleOnPress}
        style={{width:30, height:30,backgroundColor:"blue"}}>

    </TouchableOpacity>
)
}

export default BackButton
