import React from "react";
import Screen from "../../components/Screen.tsx";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import data from "../../MOCK_DATA.json";
import RoomAsListItem from "../../components/RoomAsListItem";
import {styles} from "./style.ts";
import {COLORS} from "../../utils/colors.ts";
import ImageIcon from "../../assets/icons/svgs/image.svg"

const GroupsScreen: React.FC = (props) => {

    return (
        <Screen styleProps={{backgroundColor: COLORS.WhiteBackground, paddingHorizontal: 24}}>
            <View style={{flexDirection: "row", marginTop: 60, width: "100%", height: 40, gap: 20, justifyContent: "space-evenly"}}>
                <TouchableOpacity style={[styles.whiteButton, styles.twinButtonContainer]}>
                    <Text style={[styles.twinButtonText, {color: "#096B00"}]}>Grup Oluştur</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.greenButton, styles.twinButtonContainer]}>
                    <Text style={[styles.twinButtonText, {color: COLORS.White2}]}>Gruba katıl</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", height: 65, borderTopRightRadius: 12, borderTopLeftRadius: 12, backgroundColor: COLORS.DarkGreen5, alignItems: "center",paddingLeft:12}}>
                <ImageIcon/>
                <View style={{width: 64, height: 64, marginRight: 20, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 20}}>Grup İsmi</Text>
                </View>
                <View style={{width: 120, height: 64, marginRight: 20, justifyContent: "center", alignItems: "flex-start"}}>
                    <Text style={{fontSize: 20}}>Kişiler</Text>
                </View>
                <View style={{width: 50, height: 64, marginRight: 20, justifyContent: "center", alignItems: "center"}}>
                    <Text style={{fontSize: 20}}>#</Text>
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

export default GroupsScreen
