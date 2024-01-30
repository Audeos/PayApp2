import React, {useCallback, useEffect, useMemo, useState} from "react";
import {ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "../style.ts";
import {Dropdown, SelectCountry} from "react-native-element-dropdown";
import {Bank, BANKS} from "../../../../utils/dummyBanks.ts";
import DropdownComponent from "react-native-element-dropdown/lib/typescript/components/Dropdown";
import {ibanFormatter} from "../../../../utils/textFormatter.ts";
import KeyboardClosingWrapper from "../../../../components/KeyboardClosingWrapper.tsx";
import Screen from "../../../../components/Screen.tsx";
import {screenHeight} from "../../../../utils/dimensions.ts";
import Input from "../../../../components/Input";
import CheckBox from "../../../../components/CheckBox";

const AddCardContent: React.FC = (props) => {
    const [bank, setBank] = useState<Bank | null>(null);
    const [iban, setIban] = useState<string>("");
    const [checkBox, setCheckBox] = useState(false);
    const [name, setName] = useState<string>("");

    const canSubmit = useMemo(() => (iban && bank), [iban, bank]);

    const toggle = useCallback(() => {
        setCheckBox(prevState => !prevState);
    }, []);

    return (
        <ScrollView
            contentContainerStyle={{flexGrow: 1, flexShrink: 0, paddingBottom: 87, paddingHorizontal: 26}}>
            <Text style={[styles.modalInfoText, {marginTop: 20, marginBottom: 37}]}>
                İnsanların size para gönderebilecekleri bir banka hesabı ekleyin.
            </Text>
            <SelectCountry
                data={BANKS}
                labelField={"name"}
                valueField={"id"}
                imageField={"image"}
                imageStyle={styles.leftImage}
                value={bank}
                maxHeight={200}
                containerStyle={styles.radius}
                itemContainerStyle={styles.radius}
                onChange={item => {
                    setBank(item);
                }}
                placeholder={"Banka Seçiniz"}
                placeholderStyle={[styles.placeholderColor, styles.input]}
                selectedTextStyle={[styles.input, {color: "black"}]}
                style={[styles.elementSize, styles.border, styles.radius, {marginBottom: 51}]}
            />

            <Input
                placeholder={"IBAN"}
                maxLength={27}
                onChangeText={text => setIban(text.replaceAll(/[TR ]/g, ''))}
                keyboardType="number-pad"
                value={iban ? ibanFormatter(`TR${iban}`) : undefined}/>


            <CheckBox
                onToggle={toggle}
                value={checkBox}
                text={"Kart başkası adına kayıtlı"}
                viewStyles={{marginTop: 41}}
            />

            {checkBox ? <Input
                styleProps={{marginVertical: 18}}
                placeholder={"Ad Soyad"}
                onChangeText={text => setName(text)}
                value={name}
            /> : undefined}

            <TouchableOpacity
                disabled={!canSubmit}
                style={[styles.elementSize, styles.submit, styles.border, styles.radius, {backgroundColor: !canSubmit ? "#dadada" : styles.submit.backgroundColor}]}>
                <Text style={[styles.submitText, {color: !canSubmit ? "#969696" : styles.submitText.color}]}>
                    Kart Ekle
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}


export default AddCardContent
