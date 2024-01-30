import React, {useCallback, useState} from "react";
import ScreenWithLinearBackground from "../../components/ScreenWithLinearBackground.tsx";
import {FlatList, Text, View} from "react-native";
import Input from "../../components/Input";
import Button, {PresetStyleEnum} from "../../components/Button";
import {styles} from "./style.ts";
import CheckBox from "../../components/CheckBox";
import {COLORS} from "../../utils/colors.ts";
import SectionLayout from "../../components/DashboardSection";
import People from "../../assets/dummy/peopleDummy.json";
import FriendRow from "../../components/FriendRow";
import CopyIbanIcon from "../../assets/icons/svgs/copyIban.svg";
import InformIcon from "../../assets/icons/svgs/inform.svg";

const FriendsScreen: React.FC = (props) => {
    const [showDebts, setShowDebts] = useState<boolean>(false);

    const onToggle = useCallback(() => {
        setShowDebts(prevState => !prevState);
    }, []);

    return (
        <ScreenWithLinearBackground styleProps={{paddingHorizontal: 24}}>
            <View style={styles.inputRow}>
                <Input
                    placeholder={"Arkadaş Kodu"}
                    styleProps={{textAlign: "center", width: 188}}
                />
                <Button
                    preset={PresetStyleEnum["WHITE-BORDER"]}
                    text={"Yeni Arkadaş Ekle"}/>
            </View>

            <SectionLayout linearStyles={{height: 420, marginTop: 17}}>
                <FlatList data={People}
                          contentContainerStyle={{gap: 5, paddingVertical: 22}}
                          renderItem={({item}) => {
                              return (

                                  <FriendRow image={item.imageURL} text={item.fullName}>

                                  </FriendRow>
                              )
                          }}/>
            </SectionLayout>

            <CheckBox
                text={"Borçları Görüntüle"}
                onToggle={onToggle} value={showDebts}
                alignLeft={false}
                viewStyles={{marginTop: 7}}
                outerStyles={{borderColor: "white"}}
                innerStyles={{backgroundColor: "#10C823"}}
                textStyles={{color: "#00803B", fontSize: 14}}
            />

            <Button
                viewStyles={{marginTop: 13, alignSelf: "center", backgroundColor: COLORS.DarkGreen4, borderRadius: 14, height: 42, width: 123}}
                textStyles={{fontSize: 14}}
                text={"Gruba Davet Et"}/>

        </ScreenWithLinearBackground>
    )
}

export default FriendsScreen
