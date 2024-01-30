import React, {ReactNode} from "react";
import {Text, ViewStyle} from "react-native";
import {styles} from "./style.ts";
import LinearGradient from "react-native-linear-gradient";

type LayoutProps = {
    sectionTitle?: string,
    linearStyles: ViewStyle,
    children: ReactNode
}
const SectionLayout: React.FC<LayoutProps> = (props) => {
    const {sectionTitle, linearStyles} = props;

    return (
        <>
            {sectionTitle && <Text style={styles.sectionHeader}>
                {sectionTitle}
            </Text>}
            <LinearGradient
                colors={["rgba(243,243,243,0.50)", "rgba(217,217,217,0.0)"]}
                locations={[0, 1]}
                end={{x: 0, y: 1}}
                start={{x: 1, y: 0}}
                style={[styles.glassContainer, linearStyles]}
            >
                {props.children}
            </LinearGradient>

        </>
    )
}

export default SectionLayout
