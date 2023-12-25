import {TextStyle} from 'react-native';

const fonts = {
    RobotoCondensedRegularItalic: {
        fontFamily:"RobotoCondensed-Italic",
        fontWeight:"400",
    },
    RobotoCondensedRegular: {
        fontFamily: 'RobotoCondensed-Regular',
        fontWeight:"400",
    },
    RobotoCondensedLightItalic: {
        fontFamily: 'RobotoCondensed-LightItalic',
        fontWeight:"300",
    },
    RobotoCondensedLight: {
        fontFamily: 'RobotoCondensed-Light',
        fontWeight:"300",
    },
};

type FontKeys = keyof typeof fonts;
export const Fonts = fonts as Record<FontKeys, TextStyle>;