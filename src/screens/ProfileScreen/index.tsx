import React, {FC, ReactNode, useCallback, useMemo, useState} from "react";
import Screen from "../../components/Screen.tsx";
import {Alert, Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import BackButton from "../../components/BackButton";
import {styles} from "./style.ts";
import {CopyIcon} from "../../assets/icons/Icons.tsx";
import DummyBank from "../../assets/dummy/dummyBank.svg"
import DummyBank2 from "../../assets/dummy/dummybank2.svg"
import Camera from "../../assets/icons/svgs/camera.svg"
import {launchImageLibrary} from "react-native-image-picker";
import LogoutIcon from "../../assets/icons/svgs/logout.svg"
import PasswordIcon from "../../assets/icons/svgs/password.svg"
import PhoneIcon from "../../assets/icons/svgs/phone.svg"
import NameIcon from "../../assets/icons/svgs/nameCard.svg"
import ProfileSettingsButton from "../../components/ProfileSettingsButton";
import Clipboard from "@react-native-clipboard/clipboard";
import ProfileCard from "../../components/ProfileCard";
import PreferredCard from "../../components/ProfileCard/PreferredCard.tsx";
import PlusIcon from "../../assets/icons/svgs/plus.svg"
import ProfileModal from "./ProfileModal";
import AddCardContent from "./ProfileModal/AddCardContent";
import ChangeNumberContent from "./ProfileModal/ChangeNumberContent";
import ChangePasswordContent from "./ProfileModal/ChangePasswordContent";
import {useNavigation} from "@react-navigation/native";
import {ProfileScreenNavigationProp} from "../Navigation.tsx";
import {copyToClipboard} from "../../utils/copy.ts";

const ProfileScreen: React.FC = (props) => {
    const [image, setImage] = useState(null);
    const [contentIndex, setContentIndex] = useState<number>(-1);
    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const content = useMemo(() => [
        {header: "Kart Ekle", component: <AddCardContent/>},
        {header: "Şifremi Değiştir", component: <ChangePasswordContent/>},
        {header: "Telefon Numaramı Değiştir", component: <ChangeNumberContent/>},
    ][contentIndex], [contentIndex])

    const pickImageOnPress = useCallback(async () => {
        const response = await launchImageLibrary({mediaType: "photo", quality: 0.3})

        if (response.didCancel) {
        } else if (response.errorCode) {

        } else if (response.assets) {
            console.log(response.assets[0].uri)
        }

    }, []);

    const closeModal = useCallback(() => {
        setContentIndex(-1);
    }, []);

    const logoutPrompt = useCallback(() => {
        // Alert.alert(
        //     "Çıkış Yap",
        //     "Giriş ekranına dönmek istediğinizden emin misiniz?",
        //     [
        //         {text:"Evet",onPress:()=>navigation.navigate("LoginScreen")},
        //         {text:"Hayır",onPress:()=>{}},
        //     ])
        navigation.navigate("LoginScreen");
    }, []);

    return (
        <Screen>
            <ProfileModal
                visible={!!content}
                headerText={content?.header}
                close={closeModal}>
                {content?.component}
            </ProfileModal>
            <ScrollView
                contentContainerStyle={{alignItems: "center", paddingBottom: 160}}
                style={{paddingHorizontal: 33}}>
                <TouchableOpacity
                    style={styles.profileImageContainer}
                    onPress={pickImageOnPress}>
                    {image ?
                        <Image
                            source={image}/> :
                        <View style={styles.noImageContainer}>
                            <Camera/>
                        </View>
                    }
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>copyToClipboard("260201025")}
                    style={styles.nameContainer}>
                    <Text style={styles.nameText}>Talha Türküm Özkurt</Text>
                    <View style={styles.friendIdContainer}>
                        <CopyIcon width={24} height={24}/>
                        <Text style={styles.friendIdText}>ID: 260201025</Text>
                    </View>
                </TouchableOpacity>
                <PreferredCard Icon={DummyBank} bankName={"Finansbank"} iban={"TR91700000014050203454"}/>
                <ProfileCard Icon={DummyBank} bankName={"Finansbank"} iban={"TR91700000014050203454"}/>
                <ProfileCard Icon={DummyBank2} bankName={"AKBANK"} iban={"TR91700000014050203454"}/>
                <TouchableOpacity
                    onPress={() => setContentIndex(0)}
                    style={styles.addCardButton}>
                    <PlusIcon/>
                    <Text style={styles.addCardText}>Kart Ekle</Text>
                </TouchableOpacity>
                <ProfileSettingsButton onPress={() => setContentIndex(1)} Icon={PasswordIcon} text={"Şifremi Değiştir"}/>
                <ProfileSettingsButton onPress={() => setContentIndex(2)} Icon={PhoneIcon} text={"Telefon Numaramı Değiştir"}/>
                <ProfileSettingsButton Icon={NameIcon} text={"Tam İsmimi Değiştir"}/>
                <ProfileSettingsButton
                    onPress={logoutPrompt}
                    Icon={LogoutIcon} text={"Çıkış Yap"}/>
            </ScrollView>
        </Screen>
    )
}

export default ProfileScreen
