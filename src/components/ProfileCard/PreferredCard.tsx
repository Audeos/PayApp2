import React from "react";
import {styles} from "./style.ts";
import {Text, View} from "react-native";
import {CopyIcon} from "../../assets/icons/Icons.tsx";
import {ibanFormatter} from "../../utils/textFormatter.ts";
import {ProfileCardProps} from "./index.tsx";

const PreferredCard: React.FC<ProfileCardProps> = (props) => {


    return (
        <View style={styles.preferredCardContainer}>
            <View style={styles.cardContainerHeader}>
                <props.Icon height={24}/>
                <Text style={styles.bankNameText}>{props.bankName}</Text>
            </View>
            <View style={[styles.preferredCardContainerBody]}>
                <Text style={styles.preferredText}>Tercih Edilen</Text>
                <View style={{flexDirection: "row"}}>
                    <CopyIcon strokeWidth={1.5}/>
                    <Text style={styles.IbanText}>{ibanFormatter(props.iban)}</Text>
                </View>
            </View>
        </View>
    )
}

export default PreferredCard
