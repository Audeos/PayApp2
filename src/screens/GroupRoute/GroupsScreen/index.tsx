import React from "react";
import Screen from "../../../components/Screen.tsx";
import {Text, TouchableOpacity, View} from "react-native";
import data from "../../../MOCK_DATA.json";
import RoomAsListItem from "./RoomAsListItem";
import {styles} from "./style.ts";
import {COLORS} from "../../../utils/colors.ts";
import ImageIcon from "../../../assets/icons/svgs/image.svg"
import {FlatListIndicator} from "@fanchenbao/react-native-scroll-indicator";
import Button, {PresetStyleEnum} from "../../../components/Button";

const GroupsScreen: React.FC = (props) => {

    return (
        <Screen styleProps={{backgroundColor: COLORS.WhiteBackground, paddingHorizontal: 24}}>
            <View style={{flexDirection: "row", marginTop: 60, width: "100%", marginBottom: 18, gap: 20, justifyContent: "space-evenly"}}>
                <Button
                    textStyles={{fontSize: 26}}
                    preset={PresetStyleEnum["GREEN-BORDER"]}
                    text={"Grup Oluştur"}
                />
                <Button
                    textStyles={{fontSize: 26}}
                    preset={PresetStyleEnum["FULL-GREEN"]}
                    text={"Gruba katıl"}
                />
            </View>
            <View style={{flexDirection: "row", paddingHorizontal: 16, height: 65, borderTopRightRadius: 12, borderTopLeftRadius: 12, backgroundColor: COLORS.DarkGreen5, alignItems: "center"}}>
                <ImageIcon/>
                <View style={{flex: 4, justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.tableHeaderText}>Grup İsmi</Text>
                </View>
                <View style={{flex: 2, justifyContent: "center", alignItems: "flex-start"}}>
                    <Text style={styles.tableHeaderText}>Kişiler</Text>
                </View>
                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <Text style={styles.tableHeaderText}>#</Text>
                </View>
            </View>
            <View style={{height: 450, borderBottomRightRadius: 12, borderBottomLeftRadius: 12, overflow: "hidden"}}>
                <FlatListIndicator
                    flatListProps={{
                        ItemSeparatorComponent: () => (
                            <View style={{height: 3}}/>
                        ),
                        data: data,
                        contentContainerStyle: {minHeight: 450, width: "100%", borderColor: "#C2EFC4", paddingVertical: 7, paddingHorizontal: 10, backgroundColor: "#E4F6E5"},
                        renderItem: ({item, index}) => <RoomAsListItem {...item} roomNumber={index + 1}/>
                    }}
                    horizontal={false}
                    position={"right"}
                    indStyle={{marginRight: 4, width: 7, backgroundColor: "#4A9848", position: "absolute", zIndex: 10}}
                />
            </View>
        </Screen>
    )
}

export default GroupsScreen
