import React from "react";
import {FlatList, Image, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import Screen from "../../components/Screen.tsx";
import {useNavigation} from "@react-navigation/native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {DashboardNavigationProp} from "../Navigation.tsx";
import ScreenWithLinearBackground from "../../components/ScreenWithLinearBackground.tsx";
import {COLORS} from "../../utils/colors.ts";
import LinearGradient from "react-native-linear-gradient";
import {Fonts} from "../../utils/fonts.ts";
import {Colors} from "react-native/Libraries/NewAppScreen";
import PersonSVG from "../../assets/dummy/person.svg"
import CopyIbanIcon from "../../assets/icons/svgs/copyIban.svg";
import SectionLayout from "../../components/DashboardSection";
import {styles} from "./style.ts";
import People from "../../assets/dummy/peopleDummy.json";
import Groups from "../../assets/dummy/groupsDummy.json";
import InformIcon from "../../assets/icons/svgs/inform.svg";

const DashboardScreen: React.FC = (props) => {

    const navigation = useNavigation<DashboardNavigationProp>();

    const handleRoomsOnPress = () => {
        navigation.navigate("GroupsScreen");
    }

    const handleProfileOnPress = () => {
        navigation.navigate("ProfileScreen");
    }

    return (
        <ScreenWithLinearBackground styleProps={{backgroundColor: "gray", paddingHorizontal: 24, width: "100%"}} colors={COLORS.GreenGradient}>
            <SectionLayout linearStyles={{aspectRatio: 1}} sectionTitle={"Kişilere Göre Toplam Borçlar"}>
                <FlatList data={People}
                          contentContainerStyle={{gap: 5, paddingVertical: 22}}
                          renderItem={({item}) => {
                              return (<TouchableOpacity
                                  activeOpacity={0.8}
                                  style={[styles.personContainer, styles.containerConstants]}>
                                  {item.imageURL ? <Image
                                          style={[styles.roundedImage, styles.borderImage]}
                                          source={{uri: item.imageURL}}/> :
                                      <View
                                          style={[styles.roundedImage, styles.borderImage, {overflow: "hidden"}]}>
                                          <PersonSVG/>
                                      </View>
                                  }
                                  <Text numberOfLines={1} style={styles.personNameText}>{item.fullName}</Text>
                                  {item.debt < 0 && <View style={{gap: 5, flexDirection: "row", marginLeft: "auto"}}>
									 <View style={styles.greenRound}>
										<CopyIbanIcon/>
									 </View>
									 <View style={styles.greenRound}>
										<InformIcon/>
									 </View>
								  </View>
                                  }
                                  <Text style={[styles.personDebtText, {color: item.debt < 0 ? COLORS.DebtRed : COLORS.IncomeGreen}]}>
                                      {item.debt} ₺
                                  </Text>
                              </TouchableOpacity>)
                          }}/>

            </SectionLayout>
            <SectionLayout linearStyles={{height: 225}} sectionTitle={"Dahil Olduğunuz Gruplar"}>
                <FlatList data={Groups}
                          contentContainerStyle={{paddingVertical: 15, gap: 7}}
                          renderItem={({item}) => {
                              return (
                                  <View
                                      style={[styles.groupContainer, styles.containerConstants]}>
                                      {item.imageURL ? <Image
                                              style={[styles.roundedImage]}
                                              source={{uri: item.imageURL}}/> :
                                          <View
                                              style={[styles.roundedImage, styles.borderImage, {overflow: "hidden"}]}>
                                              <PersonSVG/>
                                          </View>
                                      }
                                      <Text numberOfLines={1} style={styles.groupNameText}>{item.groupName}</Text>
                                  </View>
                              )
                          }}/>

            </SectionLayout>
        </ScreenWithLinearBackground>
    )
}

export default DashboardScreen
