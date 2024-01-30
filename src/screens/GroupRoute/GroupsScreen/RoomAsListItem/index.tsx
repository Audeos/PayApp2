import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../style.ts";
import PersonSVG from "../../../../assets/dummy/person.svg";
import {useNavigation} from "@react-navigation/native";
import {GroupsNavigationProp} from "../../../Navigation.tsx";

type RoomProps = {
    id: number,
    roomNumber: number,
    roomName: string,
    peopleCount: number,
    roomIconicPhoto: string,
}
const RoomAsListItem: React.FC<RoomProps> = (props) => {
    const navigation = useNavigation<GroupsNavigationProp>();

    return (
        <TouchableOpacity
            onPress={()=>{navigation.navigate("GroupLogScreen")}}
            style={styles.roomRowContainer}>
            <Image source={{uri: props.roomIconicPhoto}}
                   style={{width: 42, height: 42, marginRight: 16}}/>
            <View style={{width: 90, height: "100%",  marginRight: 24, justifyContent: "center", alignItems: "flex-start"}}>
                <Text style={styles.groupNameText}>{props.roomName}</Text>
            </View>
            <View style={styles.roomPeopleImagesGroup}>
                <View style={[styles.personImage, styles.one]}>
                    <PersonSVG width={32} height={32}/>
                </View><View style={[styles.personImage, styles.two]}>
                <PersonSVG width={32} height={32}/>
            </View><View style={[styles.personImage, styles.three]}>
                <PersonSVG width={32} height={32}/>
            </View>
            </View>
            <View style={{marginLeft: "auto", height: "100%", justifyContent: "center", alignItems: "center"}}>
                <Text style={styles.itemCountText}>({props.peopleCount})</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RoomAsListItem
