import React from "react";
import ScreenWithLinearBackground from "../../../components/ScreenWithLinearBackground.tsx";
import {Image, Pressable, ScrollView, Text, TouchableWithoutFeedback, View} from "react-native";
import {COLORS} from "../../../utils/colors.ts";
import {styles} from "./style.ts";
import PersonSVG from "../../../assets/dummy/person.svg";
import MESSAGES from "../../../assets/dummy/messagesDummy.json"
import {transform} from "@babel/core";

const GroupLogScreen: React.FC = (props) => {

    return (
        <ScreenWithLinearBackground>
            <View style={styles.headerContainer}>
                <Image source={require("../../../assets/dummy/groupDummy.png")}/>
                <Text style={styles.groupName}>Daire 7</Text>
                <Text style={styles.settings}>...</Text>
            </View>
            <ScrollView contentContainerStyle={{flexGrow:1,paddingHorizontal: 10, paddingTop: 36, paddingBottom:220, gap: 20}}>
                {MESSAGES.map((message) => {
                    return (
                        <Pressable key={message.id} style={[styles.row, {flexDirection: message.id % 2 == 0 ? "row-reverse" : "row"}]}>
                            <View style={[styles.person, {flexDirection: message.id % 2 == 0 ? "row-reverse" : "row"}]}>
                                <Image source={{uri: message.image}} style={{width: 38, height: 38, borderRadius: 99, borderWidth: 1, borderColor: "#ECECEC"}}/>
                                {/*<PersonSVG width={38} height={38}/>*/}
                                <View style={[styles.triangle, {transform:[{rotateZ:  message.id % 2 == 0 ? "90deg" : "270deg"}]}]}/>
                            </View>
                            <View style={styles.messageBlock}>
                                <Text style={styles.message}>
                                    <Text style={styles.messageCash}>328.90₺</Text> {message.message}
                                </Text>
                                <Text style={styles.messageSender}>
                                    {message.first_name} {message.last_name}
                                </Text>
                            </View>
                        </Pressable>
                    )
                })}

            </ScrollView>
        </ScreenWithLinearBackground>
    )
}

export default GroupLogScreen
