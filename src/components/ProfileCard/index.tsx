import React, {ReactNode} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {CopyIcon} from "../../assets/icons/Icons.tsx";
import {styles} from "./style.ts";
import {ibanFormatter} from "../../utils/textFormatter.ts";
import Clipboard from "@react-native-clipboard/clipboard";
import {copyToClipboard} from "../../utils/copy.ts";

export type ProfileCardProps = {
    bankName: string,
    iban: string,
    Icon: React.ElementType
};

const ProfileCard: React.FC<ProfileCardProps> = (props) => {

return (
    <View style={styles.cardContainer}>
        <View style={styles.cardContainerHeader}>
            <props.Icon height={24}/>
            <Text style={styles.bankNameText}>{props.bankName}</Text>
        </View>
        <TouchableOpacity
            onPress={()=>copyToClipboard(props.iban)}
            style={styles.cardContainerBody}>
            <CopyIcon strokeWidth={1.5}/>
            <Text style={styles.IbanText}>{ibanFormatter(props.iban)}</Text>
        </TouchableOpacity>
    </View>
)
}

export default ProfileCard
