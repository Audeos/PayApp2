import React from "react";
import Screen from "../components/Screen";
import {Image, Text, View} from "react-native";
import BackButton from "../components/BackButton";

const ProfileScreen: React.FC = (props) => {

    return (
        <Screen>
            <BackButton/>
            <View style={{flex: 1, alignItems: "center"}}>
                <Image
                    style={{width: 100, aspectRatio: 1, borderRadius: 99, alignSelf: "center"}}
                    source={{uri: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"}}/>
                <Text style={{marginTop: 20, fontSize: 20, fontWeight: "600"}}>TR40 6000 3000 2000 1000</Text>
                <Text style={{marginTop: 20, fontSize: 20, fontWeight: "600"}}>TR70 9000 6000 5000 4000</Text>
                <Text style={{marginTop: 20, fontSize: 20}}>Talha Türküm Özkurt</Text>
                <Text style={{marginTop: 20, fontSize: 20}}>+90 537 309 02 20</Text>
            </View>
        </Screen>
    )
}

export default ProfileScreen
