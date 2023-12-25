import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";

type RoomProps = {
    id: number,
    roomNumber: number,
    roomName: string,
    peopleCount: number,
    roomIconicPhoto: string,
}
const RoomAsListItem: React.FC<RoomProps> = (props) => {

    return (
        <TouchableOpacity style={{flexDirection: "row", height: 64, width: "100%", alignItems: "center"}}>
            <View style={{width: 30, height: "100%", marginRight: 20, justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontSize: 20}}>{props.roomNumber}</Text>
            </View>
            <Image source={{uri: props.roomIconicPhoto}}
                   style={{width: 60, height: 60, marginRight: 24}}/>
            <View style={{width: 120, height: "100%", marginRight: 24, justifyContent: "center", alignItems: "flex-start"}}>
                <Text style={{fontSize: 20}}>{props.roomName}</Text>
            </View>
            <View style={{width: 50, height: "100%", marginRight: 24, justifyContent: "center", alignItems: "center"}}>
                <Text style={{fontSize:16}}>{props.peopleCount}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RoomAsListItem
