import {Dimensions, PixelRatio} from 'react-native';

const dimensions = Dimensions.get('window');
export const standardHeight = 851;
export const standardWidth = 393;

export const fontMul = Dimensions.get("window").fontScale;
export const screenWidth = Math.min(dimensions.width, dimensions.height);
export const screenHeight = Math.max(dimensions.width, dimensions.height);

export const rx = screenWidth / standardWidth; //Iphone 12 Pro max
const ry = screenHeight / standardHeight;

export function toRx(dp: number) {
  return PixelRatio.roundToNearestPixel(dp * rx);
}

export function toRy(dp: number) {
  return PixelRatio.roundToNearestPixel(dp * ry);
}
