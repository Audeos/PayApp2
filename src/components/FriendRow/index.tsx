import React, {ReactNode} from "react";
import {styles} from "../../screens/DashboardScreen/style.ts";
import {Image, Text, TouchableOpacity, View} from "react-native";
import PersonSVG from "../../assets/dummy/person.svg";
import CopyIbanIcon from "../../assets/icons/svgs/copyIban.svg";
import InformIcon from "../../assets/icons/svgs/inform.svg";
import {COLORS} from "../../utils/colors.ts";

type FriendRowProps = {
    image: string;
    text: string;
    children: ReactNode[]
};
const FriendRow: React.FC<FriendRowProps> = (props) => {
    const {image, text, children} = props;

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.personContainer, styles.containerConstants]}>
            {image ? <Image
                    style={[styles.roundedImage, styles.borderImage]}
                    source={{uri: image}}/> :
                <View
                    style={[styles.roundedImage, styles.borderImage, {overflow: "hidden"}]}>
                    <PersonSVG/>
                </View>
            }
            <Text numberOfLines={1} style={styles.personNameText}>{text}</Text>
            {children}
        </TouchableOpacity>
    )
}

export default FriendRow
