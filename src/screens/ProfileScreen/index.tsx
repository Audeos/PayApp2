import React, {useCallback, useState} from "react";
import Screen from "../../components/Screen.tsx";
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import BackButton from "../../components/BackButton";
import {styles} from "./style.ts";
import {CopyIcon} from "../../assets/icons/Icons.tsx";
import DummyBank from "../../assets/dummy/dummyBank.svg"
import Camera from "../../assets/icons/svgs/camera.svg"
import {launchImageLibrary} from "react-native-image-picker";
import LogoutIcon from "../../assets/icons/svgs/logout.svg"
import PasswordIcon from "../../assets/icons/svgs/password.svg"
import PhoneIcon from "../../assets/icons/svgs/phone.svg"
import NameIcon from "../../assets/icons/svgs/nameCard.svg"
import ProfileSettingsButton from "../../components/ProfileSettingsButton";

const ProfileScreen: React.FC = (props) => {
    const [image, setImage] = useState(null)

    const pickImageOnPress = useCallback(async () => {
        const response = await launchImageLibrary({mediaType: "photo", quality: 0.3})

        if (response.didCancel) {
        } else if (response.errorCode) {

        } else if (response.assets) {
            console.log(response.assets[0].uri)
        }

    }, []);

    return (
        <Screen>
            <ScrollView
                contentContainerStyle={{alignItems: "center",paddingBottom:160}}
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
                <View style={styles.nameContainer}>
                    <Text style={styles.nameText}>Talha Türküm Özkurt</Text>
                    <View style={styles.friendIdContainer}>
                        <CopyIcon width={24} height={24}/>
                        <Text style={styles.friendIdText}>ID: 260201025</Text>
                    </View>
                </View>
                <Text style={{marginTop: 20, fontSize: 20, fontWeight: "600"}}>TR40 6000 3000 2000 1000</Text>
                <Text style={{marginTop: 20, fontSize: 20, fontWeight: "600"}}>TR70 9000 6000 5000 4000</Text>
                <Text style={{marginTop: 20, fontSize: 20}}>+90 537 309 02 20</Text>
                <View style={styles.cardContainer}>
                    <View style={styles.cardContainerHeader}>
                        <DummyBank height={24}/>
                        <Text style={styles.bankNameText}>Finansbank</Text>
                    </View>
                    <View style={styles.cardContainerBody}>
                        <CopyIcon strokeWidth={1.5}/>
                        <Text style={styles.IbanText}>TR91 7000 0001 4050 2034</Text>
                    </View>
                </View>

                <ProfileSettingsButton Icon={PasswordIcon} text={"Şifremi Değiştir"}/>
                <ProfileSettingsButton Icon={PhoneIcon} text={"Telefon Numaramı Değiştir"}/>
                <ProfileSettingsButton Icon={NameIcon} text={"Tam İsmimi Değiştir"}/>
                <ProfileSettingsButton Icon={LogoutIcon} text={"Çıkış Yap"}/>
            </ScrollView>
        </Screen>
    )
}

export default ProfileScreen
