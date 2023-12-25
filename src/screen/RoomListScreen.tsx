import React from "react";
import Screen from "../components/Screen";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import data from "../MOCK_DATA.json";
import RoomAsListItem from "../components/RoomAsListItem";
import BackButton from "../components/BackButton";

const RoomListScreen: React.FC = (props) => {

    return (
        <Screen styleProps={{backgroundColor: "gray", paddingHorizontal: 24}}>
            <BackButton/>
            <View style={{flexDirection: "row", marginTop: 60, width: "100%", height: 40, gap: 20, justifyContent: "space-evenly"}}>
                <TouchableOpacity style={{flex: 1, backgroundColor: "red", justifyContent: "center", alignItems: "center"}}>
                    <Text>Yeni oda kur</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex: 1, backgroundColor: "red", justifyContent: "center", alignItems: "center"}}>
                    <Text>Odaya katıl</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row"}}>
                <View style={{width: 30, height: 64, marginRight: 20, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 20}}>No</Text>
                </View>
                <View style={{width: 64, height: 64, marginRight: 20, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 20}}>asd</Text>
                </View>
                <View style={{width: 120, height: 64, marginRight: 20, justifyContent: "center", alignItems: "flex-start"}}>
                    <Text style={{fontSize: 20}}>Oda ismi</Text>
                </View>
                <View style={{width: 50, height: 64, marginRight: 20, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 20}}>Kişi</Text>
                </View>
            </View>
            <FlatList
                style={{marginTop: 20}}
                data={data}
                renderItem={({item, index}) => <RoomAsListItem {...item} roomNumber={index + 1}/>}
                ItemSeparatorComponent={() => <View style={{height: 8, backgroundColor: "#6e6e6e"}}/>}
            />

        </Screen>
    )
}

export default RoomListScreen
