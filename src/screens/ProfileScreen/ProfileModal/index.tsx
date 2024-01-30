import React, {ComponentType, ElementType, FC, ReactNode} from "react";
import {Modal, ModalProps, Text, TouchableOpacity, View} from "react-native";
import {ArrowIcon} from "../../../assets/icons/Icons.tsx";
import {styles} from "./style.ts";

type ProfileModalProps = {
    close: () => void;
    headerText: string;
    children: ReactNode
} & ModalProps;
const ProfileModal: React.FC<ProfileModalProps> = (props) => {
    const {close, headerText, children, ...rest} = props;

    return (
        <Modal {...rest}>
            <View style={styles.modalHeader}>
                <TouchableOpacity style={styles.goBackButton} onPress={close}>
                    <ArrowIcon width={34} height={34} strokeColor={"black"} strokeWidth={2.5}/>
                </TouchableOpacity>
                <Text style={styles.modalHeaderText}>{headerText}</Text>
            </View>
            {children}
        </Modal>
    )
}

export default ProfileModal
